Meteor.publish( "pilots", function(){
    return Pilots.find();
});

Meteor.publish( "allcallslists", function(){
    return Flight_calls.find();
});
