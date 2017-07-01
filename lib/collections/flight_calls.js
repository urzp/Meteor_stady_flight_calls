Flight_calls = new Mongo.Collection('flight_calls');


Flight_calls.attachSchema( new SimpleSchema({
	    begin_valid: {type: Date , label: "Начало периода действия"},
	    end_valid: {type: Date , label: "Конец периода действия"},
	    date_create: {
	    	type: Date,
	    	label: "Дата регистрации",
	    	autoValue: function(){ return new Date() }
	    }



	}, { tracker: Tracker }) 

)


