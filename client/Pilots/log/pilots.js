Template.PilotsList.helpers({
	pilots: function(){
		return Pilots.find()
		;}
	 });

Template.EditPilot.helpers({
	pilots: function(){
		return Pilots.findOne(this._id)
		;},
});

Template.EditPilot.events({
	'click #delete': function(e) {
      e.preventDefault();
      Pilots.remove(this._id);
      Router.go('PilotsList');
	}
})


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
  },
  editPilot: {
    onSuccess: function () {
    	Router.go('PilotsList');
    }
  }
});