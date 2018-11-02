class LifeInsurance {

    constructor(id,policyHolderName,policyAmount){
        this.id = id;
        this._policyHolderName = policyHolderName;
        this.policyAmount = policyAmount;
    }

    set policyHolderName(policyHolderName){
        this._policyHolderName = policyHolderName
    }

    get policyHolderName(){
        return this._policyHolderName.toUpperCase();
    }
    toString(){
        return `${this.id},${this.policyHolderName},${this.policyAmount}`
    }

}

module.exports = LifeInsurance;