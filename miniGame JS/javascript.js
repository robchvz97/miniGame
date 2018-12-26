

var numAttempt = 0;
document.getElementById("attemptValue").innerHTML = numAttempt;

document.getElementById("buttonGuess").onclick = function() {

    var randomNum = Math.floor(Math.random() * 6);
 
    if (document.getElementById("guessNumber").value == randomNum) {
        alert("Congrats! you are right.");
        numAttempt = 0;
        document.getElementById("attemptValue").innerHTML = numAttempt;
    } else {
        alert("Wrong! the number was "+ randomNum);
        numAttempt = numAttempt + 1;
        document.getElementById("attemptValue").innerHTML = numAttempt;
        if (numAttempt == 3) {
            alert("YOU LOST!");
            numAttempt = 0;
            document.getElementById("attemptValue").innerHTML = numAttempt;
        }
    }

}
