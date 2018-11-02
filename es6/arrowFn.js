var LInsurance = require("./insurance");

const ramesh = new LInsurance(101,'ramesh',4500);
const suresh = new LInsurance(102,'suresh',5500);

let policyList = [ramesh,suresh];

policyList.forEach(eachPolicy => console.log(eachPolicy.toString()));

let nameList = policyList.map(policy => policy.policyHolderName);

let amountList = policyList.map(policy => policy.policyAmount);

function showPremium(policyAmount = 2000){
    return policyAmount * .20
}

function printPremium(...policyList){
    policyList.forEach(eachPolicy => {
        console.log(showPremium(eachPolicy.policyAmount));
    });
}

console.log(nameList);

console.log(showPremium(amountList[0]));
console.log(showPremium(amountList[1]));
console.log(showPremium());

printPremium(ramesh);
printPremium(ramesh,suresh);

