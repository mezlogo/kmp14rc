Finally, JB released kotlin 1.4-RC
1) IR-compiler generates correct `.d.ts` module `export namespace mezlogo.kmp14rc`, so now ts-loader and webpack can import kmp-module without .d.ts modifications: `import { mezlogo } from 'kmp14rc';`
2) right now it's impossible to export enum to js
```
e: /tmp/kmp14rc/src/commonMain/kotlin/mezlogo/kmp14rc/common.kt: (10, 12): Declaration of such kind (enum class) cant be exported to JS
```
3) float and integer in kotlin IS number primitive in js
.kt
```
    fun incFloat(f: Float) = f + 1.0f
    fun incInt(i: Int) = i + 1
```
.d.ts
```
        incFloat(f: number): number;
        incInt(i: number): number;
```
.js
```
  KmpStdTypesSample.prototype.incFloat = function (f) {
    return f + 1.0;
  };
  KmpStdTypesSample.prototype.incInt = function (i) {
    return i + 1 | 0;
  };
```
4) Long in kotlin IS kotlin.Long in js and shouldn't be exported to js
.kt `fun incLong(l: Long) = l + 1L`
.d.ts `incLong(l: kotlin.Long): kotlin.Long;`
.js
```
  KmpStdTypesSample.prototype.incLong = function (l) {
    return l.plus_27(new Long(1, 0));
  };
```
However, there is no type declaration neither for kotlin.Long neither for kotlin.MutableList in .d.ts even compiler warns you that this is not exportable types.
```
w: /tmp/kmp14rc/src/commonMain/kotlin/mezlogo/kmp14rc/common.kt: (13, 17): Exported declaration uses non-exportable parameter type: Long
w: /tmp/kmp14rc/src/commonMain/kotlin/mezlogo/kmp14rc/common.kt: (15, 5): Exported declaration uses non-exportable return type: MutableList<String>
```
Although List and Long is not designed to be used outside of kotlin/multiplatform, I decided to export Integer or Float and Array correspondingly.
5) `@JsExport` works better, I found only one bug - any exported hierarchy have to annotate methods with `@JsName()` ONLY on parent level. For instance, look at interface's method `defImpl` without `@JsName()`, corresponding type declaration without any suffix and prototype's method WITH suffix: `defImpl_1` 
.kt
```
interface InterfaceSample {
    fun defImpl(name: String) = "defImpl: ($name)"
    @JsName("implThis")
    fun implThis(name: String): String
}

open class FirstImpl : InterfaceSample {
    override fun implThis(name: String) = "FirstImpl: " + this.defImpl(name)
}

class SecondImpl : FirstImpl() {
    override fun implThis(name: String) = "SecondImpl: " + super.implThis(name)
}
```
.d.ts
```
    interface InterfaceSample {
        defImpl(name: string): string;
        implThis(name: string): string;
    }
```
.js
```
  InterfaceSample.prototype.defImpl_1 = function (name) {
    return '' + 'defImpl: (' + name + ')';
  };

  FirstImpl.prototype.implThis_1 = function (name) {
    return 'FirstImpl: ' + this.defImpl_1(name);
  };
  FirstImpl.prototype.implThis = function (name) {
    return this.implThis_1(name);
  };

  SecondImpl.prototype.implThis_1 = function (name) {
    return 'SecondImpl: ' + FirstImpl.prototype.implThis_1.call(this, name);
  };
  SecondImpl.prototype.implThis = function (name) {
    return this.implThis_1(name);
  };
```
6) Coroutines lib now has new version: `1.3.8-1.4.0-rc`
7) Delegation works as expected
8) Promise works as expected

Script's output:
```
{
  kmp14rc: {
    DataHolder: [Function: DataHolder] { '$metadata$': [Object] },
    KmpStdTypesSample: [Function: KmpStdTypesSample] { '$metadata$': [Object] },
    FirstImpl: [Function: FirstImpl] { '$metadata$': [Object] },
    SecondImpl: [Function: SecondImpl] { '$metadata$': [Object] },
    newJsAdoptedFullApiImpl: [Function: newJsAdoptedFullApiImpl],
    JsAdoptedFullApiImpl: [Function: JsAdoptedFullApiImpl] { '$metadata$': [Object] }
  }
}
{
  DataHolder: [Function: DataHolder] {
    '$metadata$': { simpleName: 'DataHolder', kind: 'class', interfaces: [] }
  },
  KmpStdTypesSample: [Function: KmpStdTypesSample] {
    '$metadata$': { simpleName: 'KmpStdTypesSample', kind: 'class', interfaces: [] }
  },
  FirstImpl: [Function: FirstImpl] {
    '$metadata$': { simpleName: 'FirstImpl', kind: 'class', interfaces: [Array] }
  },
  SecondImpl: [Function: SecondImpl] {
    '$metadata$': { simpleName: 'SecondImpl', kind: 'class', interfaces: [] }
  },
  newJsAdoptedFullApiImpl: [Function: newJsAdoptedFullApiImpl],
  JsAdoptedFullApiImpl: [Function: JsAdoptedFullApiImpl] {
    '$metadata$': {
      simpleName: 'JsAdoptedFullApiImpl',
      kind: 'class',
      interfaces: [Array]
    }
  }
}
calls all hierarchy: SecondImpl: FirstImpl: defImpl: (FromTs)
DataHolder { _msg_0: 'Js and Kmp strings are the SAME', _priority: 1 }
data class::toString: DataHolder(msg=Js and Kmp strings are the SAME, priority=1)
incFloat - js float plus kmp float: 2.2
incInt - js integer plus kmp integer: 2
incInt - kmp works with integer, but js passes float. Resultt is integer: 2
koltin.Long can not be used with js numbers :(
Array in kmp is the same in js: JS,JS
kotlin.List is not supposed to be exported and used is JS: [JS, JS]
kotlin can opperate with array created in js: hello [kmp] from [kmp] js
kmp can modify array: KMP,WORLD
JsAdoptedFullApiImpl {
  _asyncDelegator: SomeAsyncApiImpl {},
  '_$$delegate_0': SomeSyncApiImpl {}
}
delegation works well (getLocalData): true
promise returns: [object Promise]
awaits work either: After 10ms delay (fromAsynJs)
```