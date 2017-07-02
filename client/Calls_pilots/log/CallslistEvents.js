
Template.NewCallsList.events({
	'submit form': function(e) {
    	e.preventDefault();
    	
        // take callslist_form like [{_id_pilot, call}]
        var callslist_form = [];
    	Pilots.find().forEach(function(pilot){
    		var call = $(e.target).find('[id='+pilot._id+']').val();
    		item = {id_pilot: pilot._id, call: call}
    		callslist_form.push(item);
    	})

        // take rest params
    	var callsProperties = { 
    		begin_valid: $(e.target).find('[name=begin_valid]').val(),
    		end_valid: $(e.target).find('[name=end_valid]').val(),
    		date_create:  new Date(),
    		flight_call_list: callslist_form 
    	}

        // create list_calls
     	Flight_calls.insert(callsProperties);
     	Router.go('AllCallsLists');
    }

});


Template.EditCallsList.events({
    'submit form': function(e) {
        e.preventDefault();
        
        // take callslist_form like [{_id_pilot, call}]
        var callslist_form = [];
        Pilots.find().forEach(function(pilot){
            var call = $(e.target).find('[id='+pilot._id+']').val();
            item = {id_pilot: pilot._id, call: call}
            callslist_form.push(item);
        })

        // take rest params
        var callsProperties = { 
            begin_valid: $(e.target).find('[name=begin_valid]').val(),
            end_valid: $(e.target).find('[name=end_valid]').val(),
            flight_call_list: callslist_form 
        }

        // update list_calls
        Flight_calls.update(this._id, {$set: callsProperties});
        Router.go('CallsListPage', {_id: this._id});
    }

});

Template.CallsListPage.events({
  'click .delete': function(e) {
    e.preventDefault();

      Flight_calls.remove(this._id);
      Router.go('AllCallsLists');
  }
})