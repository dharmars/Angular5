
class InsuranceAgent {

    private _agentCode:number;
    private _agentName:string;

    constructor(agentCode:number=2,agentName:string='suresh'){
        this._agentCode = agentCode;
        this._agentName = agentName;
    }

    set agentCode(agentCode:number){
        if(agentCode < 0 || agentCode > 2000)
            throw Error('Invalid value');
        this._agentCode = agentCode;
    }

    get agentCode(){
        return this._agentCode;
    }

    set agentName(agentName:string){
        this._agentName = agentName;
    }

    get agentName(){
        return this._agentName.toUpperCase();
    }
    toString(){

        return `${this._agentCode},${this._agentName}`;
    }
}

try{
    let ram = new InsuranceAgent(1010,'Ram');
    ram.agentCode = 1003;
    console.log(ram.agentCode);
    console.log(ram.agentName);
}catch(err){
    console.log(err);
}
