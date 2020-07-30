type Nullable<T> = T | null | undefined
export namespace mezlogo.kmp14rc {
    interface SomeSyncApi {
        getLocalData(): boolean;
    }
}
export namespace mezlogo.kmp14rc {
    class DataHolder {
        constructor(msg: string, priority: kotlin.Long);
        msg: string;
        priority: kotlin.Long;
        component1(): string;
        component2(): kotlin.Long;
        copy(msg: string, priority: kotlin.Long): mezlogo.kmp14rc.DataHolder;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class KmpStdTypesSample {
        constructor();
        incFloat(f: number): number;
        incInt(i: number): number;
        incLong(l: kotlin.Long): kotlin.Long;
        newArray(length: number, defaultValue: string): Array<string>;
        newList(length: number, defaultValue: string): kotlin.collections.MutableList<string>;
        modifyList(strgs: kotlin.collections.MutableList<string>): string;
        modifyArray(arr: Array<string>): void;
        joinArr(arr: Array<string>): string;
    }
    interface InterfaceSample {
        defImpl(name: string): string;
        implThis(name: string): string;
    }
    class FirstImpl implements mezlogo.kmp14rc.InterfaceSample {
        constructor();
        implThis(name: string): string;
    }
    class SecondImpl extends mezlogo.kmp14rc.FirstImpl {
        constructor();
        implThis(name: string): string;
    }
}
export namespace mezlogo.kmp14rc {
    function newJsAdoptedFullApiImpl(): mezlogo.kmp14rc.JsAdoptedFullApiImpl;
    class JsAdoptedFullApiImpl implements mezlogo.kmp14rc.SomeSyncApi {
        constructor(delegateToThis: mezlogo.kmp14rc.SomeSyncApi, asyncDelegator: mezlogo.kmp14rc.SomeAsyncApiImpl);
        getLocalData(): boolean;
        requestRemoteData(msg: string): kotlin.js.Promise<string>;
    }
}
export as namespace kmp14rc;