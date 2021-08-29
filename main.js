const roleHarvester = require("role.harvester");
const roleUpgrader = require("role.upgrader");
const respawnCreep = require("respawn");
const roleBuilder = require("role.builder");
const roleAttacker = require("role.attacker");
const roleHealer = require("role.healer");
const roleMaintenance = require("role.maintenance");


module.exports.loop = function(){

    async function para (){
        await Promise.all([Loop1(), Loop2()]);
    } 

    

    async function Loop1() {
        
        for(var name in Game.creeps){
            var creep = Game.creeps[name];
    
            if (creep.memory.role === 'harvester') {
                roleHarvester.run(creep);
                     
            }
    
            if(creep.memory.role === 'upgrader'){
                roleUpgrader.run(creep);

            }
    
            if(creep.memory.role === 'builder'){
                roleBuilder.run(creep);    
            }
            
        }
        return new Promise((resolve) => {return resolve});
    }

    
    async function Loop2() {
        for(let name in Game.creeps){
            let creep = Game.creeps[name];

            if(creep.memory.role === 'attacker'){
                roleAttacker.run(creep);

            }

            if(creep.memory.role === 'healer'){
                roleHealer.run(creep);
                
            }

            if(creep.memory.role === 'maintenance'){
                roleMaintenance.run(creep);
               
            }
            
        }
        return new Promise((resolve) => {return resolve});
    }


    para();
    

    // delete not used Memory (if creep die)
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    
    // if own creep dies -> spawn new creep
    respawnCreep.run();  
   
}