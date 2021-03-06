"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    constructor() {
        this.agentList = [];
    }
    addAgent(agent) {
        this.agentList.push(agent);
        console.log(`Adding ${agent.id},${agent.name}`);
        return agent.id;
    }
    toString() {
        this.agentList.forEach(eachAgent => {
            console.log(`In Mgr Str ${eachAgent.id} - ${eachAgent.toString()}`);
            //eachAgent.printAgent(eachAgent);
        });
    }
}
let mgr = new AgentManagerImpl();
mgr.addAgent({ id: 100, name: 'ram', mobileNumber: 911111111, category: 'lic' });
mgr.addAgent({ id: 101, name: 'sam', mobileNumber: 911111112, category: 'lic' });
mgr.toString();
