Flight_calls = new Mongo.Collection('flight_calls');

Flight_calls.schema = new SimpleSchema({
    begin_valid: {type: Date},
    end_valid: {type: Date},
    data: {type: String}
});

