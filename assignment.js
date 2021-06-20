// Ans To The Qus No. 1

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    if (kilometer >= 0) {
        return meter;
    } else {
        return "pleses Enter Positive Number!!!";
    }
}

var result = kilometerToMeter(12000);
console.log("Actually Result : ", result);
var roundResult = Math.round(result);
console.log("Round Result : ", roundResult);


// Ans to the Qus No. 2

function budgetCalculator(watch, phone, laptop) {
    var result = watch * 50 + phone * 100 + laptop * 500;

    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        return result;
    } else {
        return "pleses Enter Positive Number!!!";
    }
}

var needPrice = budgetCalculator(10, 0, 0);
console.log("Make for watch need to Price : ", needPrice, "Price");

var needPrice = budgetCalculator(0, 6, 0);
console.log("Make for phone need to Price : ", needPrice, "Price");

var needPrice = budgetCalculator(0, 0, 2);
console.log("Make for laptop need to Price : ", needPrice, "Price");

var sum = budgetCalculator(10, 6, 2);
console.log("Total Price Need : ", sum, "Unit");


// Ans to the Qus No. 3





// Ans To the Qus No. 4


function megaFriends(name) {

    var megaName = name[0];

    for (var i = 1; i < name.length; i++) {
        var compareName = name[i];
        if (compareName.length > megaName.length) {
            megaName = compareName;
        }
    }

    return megaName;
}
var result = megaFriends(["arif", "bappi", "rakibul"]);
console.log("mega Name : ", result);