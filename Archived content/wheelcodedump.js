//
    // "CURRENT SPIN: " + "&nbsp &nbsp &nbsp &nbsp" +

    // if (currentLetter == wheel.newPuzzle[i]) {
    //     currentPuzzleArray[i].innerHTML = wheel.newPuzzle[i];
    //     wheel.yourMoney = parseInt(wheel.newValue) + parseInt(wheel.yourMoney);
    //     var currentTotal = document.getElementById("totalmoney");
    //     guessState = true;
    //     currentTotal.innerHTML = "YOUR TOTAL MONEY: " + "$" + wheel.yourMoney;
    //     console.log("wheel.yourMoney", wheel.yourMoney);
    // }

    // guessLetter.addEventListener("click", wheel.guessLetter);

    // runningMoneyTotal: function() {
    //     var updateTotal = document.getElementById("totalmoney");
    //     updateTotal = yourMoney +
    //     var runningTotal = parseInt(currentSpinValue) + parseInt("totalmoney");
    //     console.log("runningTotal", runningTotal);
    //     // document.getElementById("totalChocolate").innerHTML = "Total Chocolates Ordered: " + " " + newChocolate;
    // }

    // var updateTotal = parseInt(wheel.yourMoney) + parseInt(newCardValue);
    // console.log("updateTotal", updateTotal);
    // if ((newCardValue == wheel.cards[13]) && (wheel.yourMoney > 0)) {
    //     console.log("newCardValue", newCardValue);
    //     wheel.yourMoney = 0;
    //     // currentSpinValue.innerHTML = "CURRENT SPIN: " + "$0 - ";
    // } else if ((newCardValue == wheel.cards[14]) && (wheel.yourMoney > 0)) {
    //     console.log("newCardValue", newCardValue);
    //     wheel.yourMoney = 0;
    //     // currentSpinValue.innerHTML = "CURRENT SPIN: " + "$0 - ";
    // } else {
    //     currentSpinValue = currentSpinValue;
    //     console.log("newCardValue", newCardValue);
    // }
    // var yourTotal = parseInt(newCardValue) + parseInt(updateTotal);
    // wheel.yourMoney += yourTotal;
    // console.log("yourTotal", yourTotal);
    // yourTotalNow = document.getElementById("totalmoney");
    // yourTotalNow.innerHTML = "YOUR TOTAL MONEY: " + " " + "$" + yourTotal;
    // var runningSum = parseInt(yourTotal) + parseInt(newCardValue);
    // console.log("runningSum", runningSum);

//     puzzleArray: [
//     		{puzzle: "LIMITLESS", category: "BRADLEY COOPER MOVIES"},
//             {},
//             {}
//         ],
// */

// REPLACES RANDOMIZE LINE (260 in comment)
/*
        var puzzle = wheel.cards[Math.floor(Math.random() * wheel.cards.length)];
        var newCardValue = puzzle.puzzle;
        var category = puzzle.category;
  */






/////REPEAT OF CODE
// var wheel = {
//     puzzleArray: ["LIMITLESS",
//                 "WEDDING CRASHERS",
//                 "LETHAL WEAPON",
//                 "HORSE POWER",
//                 "THE BEATLES",
//                 "BOB DYLAN",
//                 "MIAMI MARLINS",
//                 "NEW ORLEANS SAINTS",
//                 "THREE CARD MONTE",
//                 "MAGIC CARPET RIDE",
//                 "DELAYED REACTION"],
//     vowels: ["A", "E", "I", "O", "U"],
//     cards: ["200", "200", "300", "300", "400", "500", "550", "650", "800", "800", "1000", "1200", "1500", "1500", "3000", "Bankrupt", "Bankrupt"],
//     yourMoney: 0,
//     newValue: 0,
//     newPuzzle: " ",
//     yourGuesses: [],
//     letterType: "consonant",
//
//     initialize: function() {
//         console.log("==initialize==");
//         var newPuzzleBtn = document.getElementById("newpuzzle");
//         newPuzzleBtn.addEventListener("click", wheel.generatePuzzle);
//     },
//
//     userLogin: function() {
//         console.log("==userLogin==");
//     },
//
//     activateSpin: function() {
//         console.log("==activateSpin==");
//         var spinBtn = document.getElementById("spin");
//         spinBtn.addEventListener("click", wheel.generateCard);
//     },
//
//     generateCard: function() {
//         console.log("==generateCard==");
//         var newCardValue = wheel.cards[Math.floor(Math.random() * wheel.cards.length)];
//         wheel.newValue = newCardValue;
//         console.log("newCardValue", newCardValue);
//         var currentSpinValue = document.getElementById("spinmoney");
//         console.log("currentSpinValue", currentSpinValue);
//         currentSpinValue.innerHTML = "CURRENT SPIN: " + "$" + newCardValue;
//         document.getElementById("vowel").disabled = false;
//         if ((newCardValue == "Bankrupt")) {
//             wheel.yourMoney = 0;
//             var currentTotal = document.getElementById("totalmoney");
//             currentTotal.innerHTML = "YOUR TOTAL MONEY: " + "$" + wheel.yourMoney;
//             console.log("wheel.yourMoney", wheel.yourMoney);
//             document.getElementById("lettersubmit").disabled = true;
//             document.getElementById("spin").disabled = false;
//         } else {
//             var guessLetter = document.getElementById("lettersubmit");
//             guessLetter.addEventListener("click", wheel.guessLetter);
//             document.getElementById("lettersubmit").disabled = false;
//             document.getElementById("spin").disabled = false;
//             var vowelBtn = document.getElementById("vowel");
//             vowelBtn.addEventListener("click", wheel.buyVowel);
//         }
//         // var updateTotal = parseInt(wheel.yourMoney) + parseInt(newCardValue);
//         // console.log("updateTotal", updateTotal);
//         // if ((newCardValue == wheel.cards[13]) && (wheel.yourMoney > 0)) {
//         //     console.log("newCardValue", newCardValue);
//         //     wheel.yourMoney = 0;
//         //     // currentSpinValue.innerHTML = "CURRENT SPIN: " + "$0 - ";
//         // } else if ((newCardValue == wheel.cards[14]) && (wheel.yourMoney > 0)) {
//         //     console.log("newCardValue", newCardValue);
//         //     wheel.yourMoney = 0;
//         //     // currentSpinValue.innerHTML = "CURRENT SPIN: " + "$0 - ";
//         // } else {
//         //     currentSpinValue = currentSpinValue;
//         //     console.log("newCardValue", newCardValue);
//         // }
//         // var yourTotal = parseInt(newCardValue) + parseInt(updateTotal);
//         // wheel.yourMoney += yourTotal;
//         // console.log("yourTotal", yourTotal);
//         // yourTotalNow = document.getElementById("totalmoney");
//         // yourTotalNow.innerHTML = "YOUR TOTAL MONEY: " + " " + "$" + yourTotal;
//         // var runningSum = parseInt(yourTotal) + parseInt(newCardValue);
//         // console.log("runningSum", runningSum);
//     },
//
//     // activatePuzzle: function() {
//     //     console.log("==activatePuzzle==");
//     //     var newGm = document.getElementById("newpuzzle");
//     //     newGm.addEventListener("click", wheel.generatePuzzle);
//     // },
//
//     generatePuzzle: function() {
//         console.log("==generatePuzzle==");
//         wheel.activateSpin();
//         document.getElementById("puzzlearea").innerHTML = " ";
//         wheel.newPuzzle = wheel.puzzleArray[Math.floor(Math.random() * wheel.puzzleArray.length)];
//         console.log("newPuzzle", wheel.newPuzzle);
//         var puzzleArea = document.getElementById("puzzlearea");
//         console.log("puzzleArea", puzzleArea);
//         for (var i = 0; i < wheel.newPuzzle.length; i++) {
//             var puzzleLetter = wheel.newPuzzle[i];
//             var puzzleDiv = document.createElement("div");
//             puzzleDiv.setAttribute("class", "letterbox");
//             puzzleDiv.setAttribute("id", "letter_" + i);
//             // console.log("puzzleDiv", puzzleDiv);
//             puzzleArea.appendChild(puzzleDiv);
//             // puzzleDiv.innerHTML = " " + puzzleLetter;
//         }
//     },
//
//     guessLetter: function() {
//         console.log("==guessLetter==");
//         console.log("wheel.newValue", wheel.newValue);
//         var guessState = false;
//         var currentLetter = document.getElementById("letterguess").value;
//         var currentPuzzleArray = document.getElementsByClassName("letterbox");
//         console.log("currentLetter", currentLetter);
//         if (wheel.letterType == "consonant") {
//             var vowelFlag = wheel.validateLetter(currentLetter);
//             console.log("wheel.yourGuesses", wheel.yourGuesses);
//         }
//         if ((!vowelFlag) || (wheel.letterType == "vowel")) {
//             var alerts = document.getElementById("alerts");
//             alerts.innerHTML = " ";
//             // var currentTotal = document.getElementById("totalmoney");
//             // currentTotal.innerHTML = "YOUR TOTAL MONEY: " + "$" + wheel.yourMoney;
//             // // wheel.yourMoney = (wheel.yourMoney - 0);
//             var pastGuesses = wheel.yourGuesses.indexOf(currentLetter);
//             console.log("pastGuesses", pastGuesses);
//             wheel.yourGuesses.push(currentLetter);
//             document.getElementById("spin").disabled = false;
//             document.getElementById("lettersubmit").disabled = true;
//             if (pastGuesses > -1) {
//                 alert("Lose turn");
//             } else {
//                 for (var i = 0; i < wheel.newPuzzle.length; i++) {
//                     console.log("wheel", wheel.newPuzzle[i]);
//                     if (currentLetter == wheel.newPuzzle[i]) {
//                         currentPuzzleArray[i].innerHTML = wheel.newPuzzle[i];
//                       	//only change money value if guess was a consonant
//                         if (wheel.letterType !== "vowel"){
//                         	wheel.yourMoney = parseInt(wheel.newValue) + parseInt(wheel.yourMoney);
//                         	var currentTotal = document.getElementById("totalmoney");
//                         	currentTotal.innerHTML = "YOUR TOTAL MONEY: " + "$" + wheel.yourMoney;
//                         	console.log("wheel.yourMoney", wheel.yourMoney);
//                         }
//                         guessState = true;
//                     }
//                 }
//                 console.log("guessState", guessState);
//                 if (guessState == false && wheel.letterType !== "vowel") {
//                     var currentTotal = document.getElementById("totalmoney");
//                     wheel.yourMoney = Math.max(parseInt(wheel.yourMoney) - parseInt(wheel.newValue), 0);
//                     currentTotal.innerHTML = "YOUR TOTAL MONEY: " + "$" + wheel.yourMoney;
//                 } else {
//                   	//successful guess...if vowel, allow another vowel purchase
//                   	if (wheel.letterType === "vowel"){
//                     	document.getElementById("vowel").disabled = false;
//                     }
//                     var alerts = document.getElementById("alerts");
//                     alerts.innerHTML = " ";
//                 }
//             }
//         }
//     },
//
//     validateLetter: function(checkVowel) {
//         console.log("==validateLetter==");
//         var alerts = document.getElementById("alerts");
//         alerts.innerHTML = "You must enter a consonant since you didn't buy a vowel!";
//         var vowelString = "AEIOU";
//         var stringIndex = vowelString.indexOf(checkVowel);
//         console.log("stringIndex", stringIndex);
//         if (stringIndex > -1) {
//             return true;
//         } else {
//             return false;
//         }
//     },
//
//     buyVowel: function() {
//         console.log("==buyVowel==");
//         console.log("wheel.yourMoney", wheel.yourMoney);
//         if (wheel.yourMoney < 200) {
//                 alert("You do not have enough $ to buy a vowel!");
//                 document.getElementById("spin").disabled = true;
//                 document.getElementById("lettersubmit").disabled = true;
//                 document.getElementById("vowel").disabled = false;
//         } else {
//             wheel.yourMoney = (wheel.yourMoney - 200);
//             var currentTotal = document.getElementById("totalmoney");
//             currentTotal.innerHTML = "YOUR TOTAL MONEY: " + "$" + wheel.yourMoney;
//             document.getElementById("spin").disabled = false;
//             document.getElementById("lettersubmit").disabled = false;
//             document.getElementById("vowel").disabled = true;
//             wheel.letterType = "vowel";
//         }
//     },
//
//     // removeVowelMoney: function() {
//     //     console.log("==removeVowelMoney==");
//     // },
//
//     generateLetter: function() {
//         console.log("==generateLetter==");
//         document.getElementById("lettersubmit").value;
//         wheel.guessLetter();
//     }
//
//
//
//     }
//     wheel.initialize();