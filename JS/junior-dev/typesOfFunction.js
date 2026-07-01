/*
 1.Named function:
 2.Anonymous Function:<without a name>
   -> a function can be assigned to variable.
   ->a variable can reference a function
*/
function areCircle(r) {
  return 3.142 * r * r; //area of a function
} //named function
//
let age = 23;

let samsAge = age; //age=23

/*
 1.statment and expression
 2.deffirence between  function call and refencing a function
*/
let ac = areCircle; //stamement the function->
let k = areCircle(); //NaN expression<evalulated to yield>
//console.log(ac); //type of ac is a function

/*
 what is the value of ac and what is
 it.
 ->hint <use typeof>
*/
/*
 1.create a funciton of your choice. use named funciton test
 2.assign that function a variable.test
 3.directly create equate your variable to the test
 funciton defination.test
 4.Remove the original functiontest
 5.try calling the variable and try calling the original
 funciton.<Make an observation> test
 6.Remove the name of the funciton, since it uselless:test
 7.Ananoymous funciton<function without a name>:test
*/

// function rectangleArea(l, w) {
//   return l * w;
// }
//name of the funciton is useless.
//scope it cannot be accessed and used
//name if name is useless . remove the name
let rA = function (l, w) {
  return l * w;
};
