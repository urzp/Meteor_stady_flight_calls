Template.registerHelper('formatDate', function(date) {
	moment.lang('ru');
	
  return moment(date).format('DD.MMMM.YYYY');
});