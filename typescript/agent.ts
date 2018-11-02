export interface Agent{
    id:number;name:string;mobileNumber:number;category:string;
}

function printAgent(agent:Agent){
    console.log(agent.name);
}

let ram123 = {id:100,name:'ram',mobileNumber:911111111,category:'lic'};

printAgent(ram123);
