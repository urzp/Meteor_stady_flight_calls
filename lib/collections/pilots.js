Pilots = new Mongo.Collection('pilots');

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
SimpleSchema.extendOptions(['autoform']);

Pilots.attachSchema( new SimpleSchema({
	    name: {type: String, label: "Фамилия"},
	    date_create: {
	    	type: Date,
	    	label: "Дата регистрации",
	    	autoValue: function(){ return new Date() }
	    }

	}, { tracker: Tracker }) 

)

