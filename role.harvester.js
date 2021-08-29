const roleHarvester = {

    run: function(creep) {
        if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]); 
                creep.say('Sammle!');
            }
        } else {
            let structureTargets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_EXTENSION || 
                        structure.structureType == STRUCTURE_CONTAINER || 
                        structure.structureType == STRUCTURE_SPAWN || 
                        structure.structureType == STRUCTURE_TOWER)
                } 
            });
            if(structureTargets.length > 0){
                if(structureTargets[2].store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                    if(creep.transfer(structureTargets[2], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                        creep.moveTo(structureTargets[2], {visualizePathStyle: {stroke: '#ffffff'}});
                        creep.say('Lade aus!');
                    }                
                } else {
                        if(creep.transfer(structureTargets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                            creep.moveTo(structureTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                            creep.say('Lade aus!');
                        }
                    }
            }
        }
    }
 }


module.exports = roleHarvester;