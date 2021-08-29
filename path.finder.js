const pathfinder = {
// TODO: Pathfinder einrichten
    run: function(creep){

        const roomName = 'W8N7';
        const fromRoomName = 'W8N6'
        const routeBack = Game.map.findRoute(creep.room, 'W8N6', {
            routeCallback(roomName, fromRoomName) {
                if(roomName == 'W8N7') {    // avoid this room
                    return Infinity;
                }
                return 1;
            }});

       
        const route = Game.map.findRoute(creep.room, 'W8N6');
        if(route.length > 0) {
            const exit = creep.pos.findClosestByRange(route[0].exit);
            if(exit)
            creep.moveTo(exit);
        } 



    }
}

module.exports = pathfinder;