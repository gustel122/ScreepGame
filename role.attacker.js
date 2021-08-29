//const routeFinder = require("route.finder");

const roleAttacker = {

    run: function(creep){

        //routeFinder.run(creep);

        const targets = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (creep.attack(targets) === ERR_NOT_IN_RANGE) {
            creep.moveTo(targets);
        }

        const targetsInRange = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
        if(targetsInRange.length > 0) {
            creep.rangedAttack(targetsInRange[0]);
        }

        if(creep.room.controller && !creep.room.controller.my) {
            if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }

        const targetStructures = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
        if(targetStructures) {
            if (creep.attack(targetStructures) === ERR_NOT_IN_RANGE) {
                creep.moveTo(targetStructures);
            }
        }

    }
}

module.exports = roleAttacker;