/////question1///
let userInput = prompt(
  "Please choose an option. 1.deposit money 2. withdrawl Money "
);
let balance = 1500;
////question2////
if (userInput === 1) {
  const amount = Number(prompt("How much do you want to deposit "));
  alert(`Your're  balance is now${balance + amount}!`);
} else if (userInput === 2) {
  const amount = Number(prompt("How much do you want to withdrawl"));
  alert(`Your're  balance is now${balance + amount}!`);
}
////question3////
if (balance + amount <= 0) {
  alert("you have no money you owe your bank!!!!");
} else if (balance + amount >= 0) {
  alert("You have money awsome how does it feel to be rich!!");
}
