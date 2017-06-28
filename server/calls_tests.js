if (Pilots.find().count() === 0) {
  Pilots.insert({
    name: 'Румянцев',
  });

  Pilots.insert({
      name: 'Назаров',
  });

  Pilots.insert({
      name: 'Бугров',
  });
}else{
    var pilots =  []; 
    Pilots.find().forEach((pilot) =>{
    pilots.push({id_pilot: pilot._id, fl_call: '000' })         
    });
    
}





Flight_calls.insert({
    begin_valid: new Date(2017, 1, 1),
    end_valid: new Date(2017, 1, 2),
    date_create: new Date(),
    data: pilots
  });