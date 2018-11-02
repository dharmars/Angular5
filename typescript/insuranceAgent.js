"use strict";
class InsuranceAgent {
    constructor(agentCode = 2, agentName = 'suresh') {
        this._agentCode = agentCode;
        this._agentName = agentName;
    }
    set agentCode(agentCode) {
        if (agentCode < 0 || agentCode > 2000)
            throw Error('Invalid value');
        this._agentCode = agentCode;
    }
    get agentCode() {
        return this._agentCode;
    }
    set agentName(agentName) {
        this._agentName = agentName;
    }
    get agentName() {
        return this._agentName.toUpperCase();
    }
    toString() {
        return `${this._agentCode},${this._agentName}`;
    }
}
try {
    let ram = new InsuranceAgent(1010, 'Ram');
    ram.agentCode = 1003;
    console.log(ram.agentCode);
    console.log(ram.agentName);
}
catch (err) {
    console.log(err);
}
