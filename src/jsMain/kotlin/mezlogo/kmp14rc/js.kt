@file:JsExport

package mezlogo.kmp14rc

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise

fun newJsAdoptedFullApiImpl(): JsAdoptedFullApiImpl {
    val delegateToThis = SomeSyncApiImpl()
    val someAsyncApiImpl = SomeAsyncApiImpl()
    return JsAdoptedFullApiImpl(delegateToThis, someAsyncApiImpl)
}

class JsAdoptedFullApiImpl(delegateToThis: SomeSyncApi, private val asyncDelegator: SomeAsyncApiImpl): SomeSyncApi by delegateToThis {
    @JsName("requestRemoteData")
    fun requestRemoteData(msg: String) = GlobalScope.promise { asyncDelegator.requestRemoteData(msg) }
}
