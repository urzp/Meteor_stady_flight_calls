//$('#myCalendar').fullCalendar('refetchEvents');

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();


var event = {
		id: 1,
		title: 'Период',
		start: '2017-07-07T21:00:00',
		allDay: true,
		description: 'Happy Birthday',
	}

        
 $('#calendarDiv').fullCalendar('addEventSource', [event]);







 /*
cl_events =[];

Flight_calls.find().forEach(function(item,index){

	cl_events.push({
		id: 1,
		title: 'Период',
		start: new Date(y, m, i),
		allDay: true,
		description: 'Happy Birthday',

	});

});
console.log(cl_events);
*/




		/*id: index,
		title: "Период действиия позывных",
		start: Date(item.begin_valid),
		end: Date(item.end_valid),
		allDay: false,
		description: 'Happy Birthday',
		color: '#3498db' */

/*
cl_events = function(){


	return	[{
		id: 1,
		title: 'Период',
		start: '2017-07-07T21:00:00',
		allDay: true,
		description: 'Happy Birthday',
	}];

}

cl_events = [{
		id: 1,
		title: 'Период',
		start: '2017-07-07T21:00:00',
		allDay: true,
		description: 'Happy Birthday',
	}];

*/
		

	

/*

cl_events = [
{
id: 1,
title: 'Birthday',
start: new Date(y, m, 1),
allDay: true,
description: 'Happy Birthday',
},{
id: 2,
title: 'Concert',
start: '2016-12-07T21:00:00',
end :'2016-12-07T23:00:00',
allDay: false,
color: '#e74c3c'
}, {
id: 3,
title: 'Lunch',
start: new Date(y, m, 16, 14),
end: new Date(y, m, 16, 16),
allDay: false,
color: '#3498db'
}, {
id: 4,
title: 'Class',
start: new Date(y, m, 20, 10),
allDay: false,
color: '#9b59b6'
}, {
id: 5,
title: 'Party',
start: new Date(y, m, 5, 18),
allDay: false,
color: '#e67e22'
}] 
*/


