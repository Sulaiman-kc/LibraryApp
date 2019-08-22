const os=require('os');

var totMem=os.totalmem();
var freeMem=os.freemem();
console.log("total memory="+totMem);
console.log("free memory="+freeMem);


console.log(`free memory= ${freeMem}`);
