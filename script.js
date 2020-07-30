const kmp = require('./build/js/packages/kmp14rc/kotlin/kmp14rc.js')
console.log(kmp);
const kmpMathSample = new kmp.mezlogo.kmp14rc.KmpMathSample();
console.log(kmpMathSample.incFloat(1.2));
console.log(kmpMathSample.incInt(1));