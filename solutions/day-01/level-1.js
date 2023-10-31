let a = [];
let fiveElementArray = [1,2,3,4,5,6];
console.log(fiveElementArray.length);
console.log("first item " + fiveElementArray[0]);
console.log("last item " + fiveElementArray[fiveElementArray.length-1]);
console.log("Middle item " + fiveElementArray[(fiveElementArray.length)/2]);
let mixedDataTypes = [1,1.5002,'abcd',true,{a:'aaa'}];
console.log(mixedDataTypes.length);
let itCOmpanies = ['Facebook', 'Google', 'Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCOmpanies);
console.log("Number of companies: "+itCOmpanies.length);
for (let i = 0;i<itCOmpanies.length;i++) {
    console.log(itCOmpanies[i]);
}
for (let i = 0;i<itCOmpanies.length;i++) {
    itCOmpanies[i] = itCOmpanies[i].toUpperCase();
}
console.log(itCOmpanies);
let index = itCOmpanies.indexOf('Google');
if (index != -1){
    console.log("Exsits");
} else {
    console.log("Not Found");
}
itCOmpanies.sort();
itCOmpanies.reverse();
console.log(itCOmpanies.slice(0,3));
console.log(itCOmpanies.slice(-4,-1));
