let maxNum = parseInt(prompt("enter your Max number!"))
while (!maxNum) {
    maxNum = parseInt(prompt("enter your Fucking Max number!!!!"))
}

let guessNum = Math.floor(Math.random() * maxNum + 1);
let whatNum = prompt("guess your number!!!!");

while (parseInt(whatNum) !== guessNum) {
    if (whatNum === "q") break
    if (whatNum > guessNum) {
        whatNum = prompt("your number too big!!!!");
    } else {
        whatNum = prompt("your number too low");
    }
}
if (whatNum === "q") {
    alert('loser!!');
} else {
    alert(`you win!!!`);
}


