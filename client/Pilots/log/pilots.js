Template.PilotsList.helpers({
	pilots: function(){
		return Pilots.find()
		;}
	 });

/*
Template.NewPilot.events({
  'submit form': function(e) {
    e.preventDefault();
     Router.go('PilotsList')
     }
});
*/


AutoForm.hooks({
  newPilot: {
    onSuccess: function () {
    	Router.go('PilotsList');
    }
  }
});