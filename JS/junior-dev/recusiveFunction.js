/*
 A recusive function is a function that calls itself.
 -> since this creates an endless loop you need to find a way
 to terminate. That is using a return statement  and if <condition>
*/

function salaryGrossPromptProcess(attempt = 0) {
  let gross = null;
  if (attempt == 0) {
    gross = prompt("Enter your gross salary");
  } else {
    gross = prompt(
      `${attempt + 1} Invalid gross salary entered. enter a  number for gross salary.try again.`,
    );
  }
  if (isNaN(gross) === false) {
    //condition is met
    console.log(`You entered this amount ${gross} exiting`);
    return; // exit a function
  }
  salaryGrossPromptProcess(attempt + 1);
}
salaryGrossPromptProcess();
/*
 1.remove the alert=>
 2. initial prompt should be enter your gross salary
 3. any prompot after that should be `Invalid gross salary entered. enter a  number for gross salary.try again`

*/

/*
  create  a function to calculate the factorial of a number.
  the function takes a paremeter 
  -@param1 which is a number and returns the factorial of the number
  example. factorial(5) output 120
  // 5*4*3*2*1
  // check the number entered is greater 1-> 
  //hint use a recusive function-> 
*/
