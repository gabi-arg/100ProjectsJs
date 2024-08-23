const bill = document.querySelector('#Bill'); 
const tip = document.querySelector('#Tip');   
const calculateButton = document.querySelector('#calculateButton');


calculateButton.addEventListener('click', calculate);

function calculate() {
    const billValue = parseFloat(bill.value);  
    const tipValue = parseFloat(tip.value);   

    if (!isNaN(billValue) && !isNaN(tipValue)) {
        const tipAmount = billValue * (tipValue / 100);
        const total = billValue + tipAmount;

        document.querySelector('#total').textContent = `Total: $${total.toFixed(2)}`;
    } else {
        document.querySelector('#total').textContent = "Please enter valid numbers";
    }
}