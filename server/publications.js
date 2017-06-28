Meteor.publish( "pilots", function(){
    return Pilots.find();
});