Template.NewCallsList.helpers({
  pilots: function(){
    return Pilots.find()
    ;},
    makeUniqueID() {
      return `update-each-${this._id}`;
    }
});

Template.NewCallsList.events({
	'submit form': function(e) {
    	e.preventDefault();
    	var callslist_form = [];
    	Pilots.find().forEach(function(pilot){
    		var call = $(e.target).find('[id='+pilot._id+']').val();
    		item = {id_pilot: pilot._id, call: call}
    		callslist_form.push(item);
    	})

    	var callsProperties = { 
    		begin_valid: $(e.target).find('[name=begin_valid]').val(),
    		end_valid: $(e.target).find('[name=end_valid]').val(),
    		date_create:  new Date(),
    		flight_call_list: callslist_form 
    	}

    	    	console.log( callsProperties);
	         	Flight_calls.insert(callsProperties);
	         	Router.go('AllCallsLists');
    }

});