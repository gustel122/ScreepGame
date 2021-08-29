const roleUpgrader = {

    run: function(creep){
            
            // if energy storage of creep empty and creep is upgrading -> stop upgrading
            if(creep.memory.upgrading && creep.carry.energy == 0) {
                creep.memory.upgrading = false;
            }
            
            // if energy storage of creep full and creep is not upgrading -> start upgrading
            if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            }
            
            // find new Energy Resource (if not upgrading) or go upgrading
            if(!creep.memory.upgrading) {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.say('Sammle!');

                }
            }
            else {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                creep.say('Upgrade!');
            }
        }
    }

}


module.exports = roleUpgrader;
