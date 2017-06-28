var pilots =  Pilots.findOne()._id;

Flight_calls.insert({
    begin_valid: new Date(2017, 1, 1),
    end_valid: new Date(2017, 1, 2),
    data: pilots
  });