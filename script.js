const userChoice = prompt("Choose heads or tails").toLowerCase();

const randomNumber = Math.floor(Math.random() * 2);

if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}
if (userChoice === computerChoice) {
    alert(`You guessed right! The coin flip landed on ${userChoice}`);
} else {
    alert(`Sorry, the coin flip landed on ${computerChoice}`);
}

let birthYear;
birthYear = prompt("What year were you born?");
birthYear = parseInt(birthYear);
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}


