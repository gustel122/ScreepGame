const spawnNewCreep = {

    run: function() {
        // Declare Arrays
        const creepControlUpgrader = [];
        const creepControlHarvester = [];
        const creepControlBuilder = [];
        const creepControlAttacker = [];
        const creepControlHealer = [];
        const creepControlMaintenance = [];

        // Sort of individual roles 
        for(var creeps in Game.creeps){
            if (Game.creeps[creeps].memory.role === 'upgrader'){
                creepControlUpgrader.push(creeps); 
            }
            if (Game.creeps[creeps].memory.role === 'harvester'){
                creepControlHarvester.push(creeps);
            }
            if (Game.creeps[creeps].memory.role === 'builder'){
                creepControlBuilder.push(creeps);
            }
            if (Game.creeps[creeps].memory.role === 'attacker'){
                creepControlAttacker.push(creeps);
            }
            if (Game.creeps[creeps].memory.role === 'healer'){
                creepControlHealer.push(creeps);
            }
            if (Game.creeps[creeps].memory.role === 'maintenancer'){
                creepControlMaintenance.push(creeps);
            }
        }

        // if number of Upgrader smaller as 4 -> spawn new Upgrader
        if(creepControlUpgrader.length < 4){
            var name = 'Aufwerter' + Game.time;
            Game.spawns['creepbuilder'].spawnCreep([CARRY,WORK,MOVE], name, {memory: {role: 'upgrader'}});
        } 

        // if number of Harvester smaller as 4 -> spawn new Harvester
        if(creepControlHarvester.length < 4){
            var name = 'Sammler' + Game.time;
            Game.spawns['creepbuilder'].spawnCreep([CARRY,WORK,MOVE], name, {memory: {role: 'harvester'}});
        }

        // if number of Builder smaller as 4 -> spawn new Builder
        if(creepControlBuilder.length < 4){
            var name = 'Bauarbeiter' + Game.time;
            Game.spawns['creepbuilder'].spawnCreep([CARRY,WORK,MOVE], name, {memory: {role: 'builder'}});
        }

        // if number of Attacker smaller as 2 -> spawn new Attacker
        if(creepControlAttacker.length < 2){
            var name = 'Soldat' + Game.time;
            Game.spawns['creepbuilder'].spawnCreep([ ATTACK, ATTACK, MOVE, MOVE, MOVE], name, {memory: {role: 'attacker'}});
        }

        // if number of Healer smaller as 2 -> spawn new Healer
        if(creepControlHealer.length < 2){
            var name = 'Sanitäter' + Game.time;
            Game.spawns['creepbuilder'].spawnCreep([,HEAL,HEAL,MOVE,MOVE], name, {memory: {role: 'healer'}});
        }

        if(creepControlMaintenance.length < 4){
            var name = 'Instandhalter' + Game.time;
            Game.spawns['creepbuilder'].spawnCreep([CARRY,WORK,WORK,MOVE,MOVE], name, {memory: {role: 'maintenancer'}});
        }

        
    }
}

module.exports = spawnNewCreep;