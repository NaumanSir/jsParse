function staff () {
    for(employees in users) {
      for(var i=0; i<users.employees.length; i++) {
        var count = i+1;
        var first_name = users.employees[i].first_name;
        var first = first_name.toUpperCase();
        var last_name = users.employees[i].last_name;
        var last = last_name.toUpperCase();
        var letterCount = first_name.length + last_name.length;
        console.log(count + ' - ' + last + ', ' + first + ' - ' + letterCount);
      }
    }
    for(managers in users) {
      for(var i=0; i<users.managers.length; i++) {
        var count = i+1;
        var first_name = users.managers[i].first_name;
        var first = first_name.toUpperCase();
        var last_name = users.managers[i].last_name;
        var last = last_name.toUpperCase();
        var letterCount = first_name.length + last_name.length;
        console.log(count + ' - ' + last + ', ' + first + ' - ' + letterCount);
      }
    }
  }
  
  
  let users = {
    employees: [
        {'first_name' : 'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
      managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
  };
  
  
  staff (users);
  