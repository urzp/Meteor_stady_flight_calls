Template.AllCallsLists.helpers({
	callsLists: function(){
		return Flight_calls.find()
	;}
});


Template.CallsListPage.helpers({
	flight_call_list: function(){
		var list = []
		this.flight_call_list.forEach(function(item){
			list.push( {name:Pilots.findOne(item.id_pilot).name, call:item.call  } )
		});
		return list;
	}
});

Template.NewCallsList.helpers({
  pilots: function(){
    return Pilots.find()
    ;}
});


Template.EditCallsList.helpers({
	pilots: function(){
    	return Pilots.find()
    },
	flight_call_list: function(){
		var list = []
		this.flight_call_list.forEach(function(item){
			list.push( {name:Pilots.findOne(item.id_pilot).name, call:item.call, id_pilot: item.id_pilot } )
		});
		return list;
	}
});

