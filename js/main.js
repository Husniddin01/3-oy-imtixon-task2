// 2-task
// -------------------------------------
// Jamoa //

var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },
  
    "Oybek": {
        name: "Oybek",
        surname: "sattorov",
        age: 36,
        salary: 1500
    },
  
    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
    }

}
 // oyliklari yig'indisini hisoblash
function sumSalary(item) {
      
    var result=0
    for (const key in item) {
          result+=item[key].salary;
     }
    
    return result   
    
}
// jamoa yoshining o'rtachasini hisoblaydi
function avarageAge(item2) {
      var result2=0
      var i=0
      for (const key2 in item2) {
          i++ ;
          result2+=item2[key2].age
      }
  
    return result2/i
}


console.log(sumSalary(users));
//--> 2700

console.log(avarageAge(users));
//--> 28
