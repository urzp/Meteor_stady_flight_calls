
var pilots = []

if (Pilots.find().count() === 0){
	Pilots.insert({
	name:"Румянцев"
	})
	Pilots.insert({
		name:"Бугров"
	})
	Pilots.insert({
		name:"Назаров"
	})
	console.log("pilots added")


Pilots.find().forEach(function(pilot){
    pilots.push({id_pilot:pilot._id, call: "000"});
})

Flight_calls.insert({
    begin_valid: new Date(2017, 1, 1),
    end_valid: new Date(2017, 2, 1),
    flight_call_list: pilots
 });

pilots = []

Pilots.find().forEach(function(pilot){
    pilots.push({id_pilot:pilot._id, call: "111"});
})

Flight_calls.insert({
    begin_valid: new Date(2017, 2, 1),
    end_valid: new Date(2017, 3, 1),
    flight_call_list: pilots
 });

}

