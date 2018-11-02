var LInsurance = require("./insurance");

class Application {
    static main() {
    const ramesh = new LInsurance(101,'ramesh',4500);
    const suresh = new LInsurance(102,'suresh',5500);

    let policyList = [ramesh,suresh];
    let i=0;

    for (;i<policyList.length;i++){
        console.log(policyList[i].toString());
        console.log(policyList[i].policyHolderName);
    }

    console.log(i);
    }
}

Application.main();
