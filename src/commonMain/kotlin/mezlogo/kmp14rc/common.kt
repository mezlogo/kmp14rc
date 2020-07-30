@file:JsExport

package mezlogo.kmp14rc

import kotlin.js.JsExport
import kotlin.js.JsName

data class DataHolder(var msg: String, var priority: Long)

class KmpStdTypesSample {
    fun incFloat(f: Float) = f + 1.0f
    fun incInt(i: Int) = i + 1
    fun incLong(l: Long) = l + 1L
    fun newArray(length: Int, defaultValue: String = "") = Array<String>(length) { defaultValue }
    fun newList(length: Int, defaultValue: String = "") = MutableList<String>(length) { defaultValue }
    fun modifyList(strgs: MutableList<String>) = strgs.set(0, "KMP")
    fun modifyArray(arr: Array<String>) {
        arr[0] = "KMP"
    }
    fun joinArr(arr: Array<String>) = arr.reduce { l, r -> "$l [kmp] $r" }
}

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
