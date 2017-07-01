Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 waitOn: function() { return Meteor.subscribe('pilots'); }
});

Router.map(function() {
 this.route('home', {path: '/'});
 this.route('PilotsList', {path: '/pilotsList'});
 this.route('NewPilot', {path:'/newpilot'});
 this.route('EditPilot', { path: '/editpilot/:_id',
    data: function() { return Pilots.findOne(this.params._id); }
  });
});

Router.map(function() { 
	this.route('AllCallsLists', {path: '/allcallslists'});
	this.route('CallsListPage', { path: '/callsListpage/:_id', data: function() { 
		return Flight_calls.findOne(this.params._id); } 
	});
	this.route('NewCallsList', {path:'/newcallslist'});

});