/*
Name: Tyler Salvador
Date: July 21, 2026

Calculates:
- Tip Amount
- Total Bill
- Cost Per Person

Includes live validation.
*/

const bill = document.getElementById("billAmount");
const tip = document.getElementById("tipPercent");
const people = document.getElementById("peopleCount");

const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");
const peopleError = document.getElementById("peopleError");

function validateBill(){

    if(bill.value === "" || Number(bill.value) < 0){

        billError.textContent = "Enter a bill amount ≥ 0.";
        return false;
    }

    billError.textContent = "";
    return true;
}

function validateTip(){

    const value = Number(tip.value);

    if(tip.value === "" || value < 0 || value > 100){

        tipError.textContent =
            "Tip must be a number from 0 to 100.";

        return false;
    }

    tipError.textContent = "";
    return true;
}

function validatePeople(){

    if(people.value === "" ||
        Number(people.value) < 1 ||
        !Number.isInteger(Number(people.value))){

        peopleError.textContent =
            "People count must be a whole number ≥ 1.";

        return false;
    }

    peopleError.textContent = "";
    return true;
}

bill.addEventListener("input", validateBill);
tip.addEventListener("input", validateTip);
people.addEventListener("input", validatePeople);

document
.getElementById("calculateBtn")
.addEventListener("click", function(){

    const valid =
        validateBill() &
        validateTip() &
        validatePeople();

    if(!valid){

        document.getElementById("results").style.display="none";
        return;
    }

    const billAmount = Number(bill.value);
    const tipPercent = Number(tip.value);
    const peopleCount = Number(people.value);

    const tipAmount = billAmount * (tipPercent / 100);
    const total = billAmount + tipAmount;
    const perPerson = total / peopleCount;

    const output = `
        <h2>Summary</h2>

        <p>Calculated Tip: $${tipAmount.toFixed(2)}</p>

        <p>Total with Tip: $${total.toFixed(2)}</p>

        <p>Per Person: $${perPerson.toFixed(2)}
        (${peopleCount} people)</p>
    `;

    const results = document.getElementById("results");

    results.innerHTML = output;
    results.style.display = "block";

});