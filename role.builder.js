const roleBuilder = {

    run: function(creep){
        if(creep.memory.building && creep.carry.energy === 0){
            creep.memory.building = false;
        } 

        if(!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
            creep.memory.building = true;
        }
        
        if(!creep.memory.building){
            var sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
                creep.say('Sammle!');

            }
        } else {
            const buildings = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (creep.build(buildings) === ERR_NOT_IN_RANGE) {
                creep.moveTo(buildings);
                creep.say('Baue!');
            }
        
        } 

      
    }
}

module.exports = roleBuilder;