//map is kind of array looping one by one forward step
const numbers = [2, 4, 6, 8, 11];


// const double = numbers.map(function(element){
//     return element*element;
   
// });
// console.log(double);


// const result = numbers.map(x=>x*x);
// console.log(result);

//const bigger = numbers.filter(x=>x>5);

const bigger = numbers.find(x=>x>5); //find just take first element of condition true.

console.log(bigger);