// Task 1

let numb = 9;
    if (numb % 2 !==0) {
console.log(`number ${numb} is odd`);
}
else {
    console.log(`number ${numb} is even`);
}

//Task 2

let myAge = 31;
if ( myAge <= 18) {
      console.log('0-18 years');
     }
else if (myAge > 18 && myAge <= 30) {
    console.log('19-30 years');  
}
 else if (myAge > 30 && myAge <= 40) { 
    console.log('31-40 years');  
  }
  else if (myAge > 40 && myAge <= 50) { 
    console.log('41-50 years');  
  }
else {
    console.log('51 + years');
}

// Task 3

const nmbr = 6;
 if (nmbr % 2 == 0 && nmbr % 3 == 0) {
    console.log('Fizz Bazz');
}
else if (nmbr % 2 == 0) {
    console.log('Fizz');
}
else if (nmbr % 3 == 0) {
    console.log('Bazz');
}
else {
    console.log(`${nmbr}`);
}
