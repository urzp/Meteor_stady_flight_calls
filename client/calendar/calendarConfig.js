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
        events: cl_events
    });  
});