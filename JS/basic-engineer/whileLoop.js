/*
Loops: run a block of code over and over again
you should not loop <infinity>:but
an exit condition
syntax:
 while(<condition>){
  //block of code
 }
  // condition it truthy=>continue
  // exit if condition is falsey:<false>

//Counter its at 0-> 100
//
*/

// count to 100// 1000 //x
let n = 0;
let condition = true;
//condition=> falsey: we automatically exit the loop
while (condition) {
  console.log("n is", n); //statement 1
  n = n + 1; //statement 1
  if (n > 100) {
    //statement 1
    condition = false; //statement 1
  } //statement 1
}
/*
 -> big 0 notation-> 
 -> 
*/

// iteration 1->
// recusive<advanced>->loop
// loop->recusive
// recusive:<call stack:17314> // cycles stack works loop
