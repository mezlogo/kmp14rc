package mezlogo.kmp14rc

import kotlinx.coroutines.delay
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
interface SomeSyncApi {
    @JsName("getLocalData")
    fun getLocalData(): Boolean
}

class SomeSyncApiImpl: SomeSyncApi {
    override fun getLocalData() = true
}

class SomeAsyncApiImpl {
    suspend fun requestRemoteData(msg: String): String {
        delay(10)
        return "After 10ms delay ($msg)"
    }
}