/*
 promt("")

 checking if is a number
 1.isNaN
 2.Number->
 3.+<>

*/

let grossMonthlySalary; //
while (true) {
  let gross = prompt("Enter your gross salary");
  if (isNaN(gross) === false) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }

  alert(`Invalid amount entered.
     Ensure you enter a number greater than 0
    `);
}
//grossMonthly ->no hope. its a number the number is >0
console.log(
  `Gross salay is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`,
);
//->here
//Calculate paye.

let paye = null;
let tier = null;
if (grossMonthlySalary < 24000) {
  paye = grossMonthlySalary * (10 / 100);
  tier = "0-24,000 KES";
}

if (grossMonthlySalary > 24000 && grossMonthlySalary <= 32333) {
  paye = grossMonthlySalary * (25 / 100);
  tier = "24,000-32,333 KES";
}

if (grossMonthlySalary > 32333 && grossMonthlySalary <= 500000) {
  paye = grossMonthlySalary * (30 / 100);
  tier = "32,333-500,000 KES";
}

if (grossMonthlySalary > 500000 && grossMonthlySalary <= 800000) {
  //tire 3
  paye = grossMonthlySalary * (32.5 / 100);
  tier = "500,000-800,000 KES";
}

if (grossMonthlySalary > 800000) {
  paye = grossMonthlySalary * (35 / 100);
  tier = "800,000-infinity KES";
}

//->
alert(`Paye is ${paye} and tier level is ${tier}`);
