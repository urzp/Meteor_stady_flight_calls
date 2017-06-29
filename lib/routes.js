Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 waitOn: function() { return Meteor.subscribe('pilots'); }
});

Router.map(function() {
 this.route('home', {path: '/'});
 this.route('PilotsList', {path: '/pilotsList'});
 this.route('AllCallsLists', {path: '/allCallsLists'});
});