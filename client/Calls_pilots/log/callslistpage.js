Template.CallsListPage.helpers({
	flight_call_list: function(){
		var list = []
		this.flight_call_list.forEach(function(item){
			list.push( {name:Pilots.findOne(item.id_pilot).name, call:item.call  } )
		})
		return list
		;}
	 });
