import { mezlogo } from 'kmp14rc';

function l(msg: any) { console.log(msg); }

l(mezlogo);
const kmp = mezlogo.kmp14rc;
l(kmp);

const hierarchySmpl = new kmp.SecondImpl();
l("calls all hierarchy: " + hierarchySmpl.implThis("FromTs"));

const dataClassSmpl = new kmp.DataHolder("Js and Kmp strings are the SAME", 1);
l(dataClassSmpl);
l("data class::toString: " + dataClassSmpl.toString());

const dataTypesSmpl = new kmp.KmpStdTypesSample();
l("incFloat - js float plus kmp float: " + dataTypesSmpl.incFloat(1.2));
l("incInt - js integer plus kmp integer: " + dataTypesSmpl.incInt(1));
l("incInt - kmp works with integer, but js passes float. Resultt is integer: " + dataTypesSmpl.incInt(1.2));

try {
    l(dataTypesSmpl.incLong(1.2));
} catch (ex) {
    l("koltin.Long can not be used with js numbers :(");
}

l("Array in kmp is the same in js: " + dataTypesSmpl.newArray(2, "JS"));
l("kotlin.List is not supposed to be exported and used is JS: " + dataTypesSmpl.newList(2, "JS"));
l("kotlin can opperate with array created in js: " + dataTypesSmpl.joinArr(["hello", "from", "js"]));
const jsArray = ["JS", "WORLD"]
dataTypesSmpl.modifyArray(jsArray);
l("kmp can modify array: " + jsArray);

const apiSmpl = kmp.newJsAdoptedFullApiImpl();
l(apiSmpl);
l("delegation works well (getLocalData): " + apiSmpl.getLocalData());
l("promise returns: " + apiSmpl.requestRemoteData("fromJs"));

async function waitProm() { l("awaits work either: " + await apiSmpl.requestRemoteData("fromAsynJs")); }

waitProm();