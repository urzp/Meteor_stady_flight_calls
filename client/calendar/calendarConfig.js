

Template.calendar.onRendered(() => {   

    $('#calendarDiv').fullCalendar({
        lang:"ru",
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль',
                     'Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort:['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль',
                         'Авг.','Сент.','Окт.','Ноя.','Дек.'],
        header: {
            left: ' basicWeek, month',
            center: 'title',
            right: 'prevYear, prev, today, next, nextYear'
        },
        editable: true,
        dayClick: function() {
            alert('a day has been clicked!');
        }
    });  

    cl_events =[];

    Flight_calls.find().forEach(function(item){

        cl_events.push({
            title: "Период действиия позывных "  ,
            start: item.begin_valid,
            end: item.end_valid  +  'T23:00:00',
            allDay: false,
            description: 'Happy Birthday',
            url: '/callsListpage/'+ item._id,
            color: 'rgba(38, 235, 218, 0.3)',
            TextColor: 'rgb(55, 57, 89)'
        });
        
    });

    
    console.log(cl_events);

     $('#calendarDiv').fullCalendar('addEventSource', cl_events);

});