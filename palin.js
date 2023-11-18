function checkPalindrome() {
    var input = document.getElementById("input").value;
    var inputLowerCase = input.toLowerCase();
    var reversedInput = inputLowerCase.split("").reverse().join("");
    if(inputLowerCase === reversedInput) {
        document.getElementById("result").innerHTML = "It is a palindrome!";
    } else {
        document.getElementById("result").innerHTML = "It is not a palindrome!";
    }
 }
 