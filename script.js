//  main function for calculation
function quantityChanges(isIncrease, classp) {
    const ticketQuantityInput = document.getElementById(classp + '-ticket-quantity');
    const ticketQuantityNo = parseInt(ticketQuantityInput.value);

    let ticketQuantityNewNoCount = 0;
    if (isIncrease == true) {
        ticketQuantityNewNoCount = ticketQuantityNo + 1;
    }
    if (isIncrease == false && ticketQuantityNo > 0) {
        ticketQuantityNewNoCount = ticketQuantityNo - 1;
    }
    ticketQuantityInput.value = ticketQuantityNewNoCount;

    calculateTotal()
}

// total ticket prices, vat, prices including vat 
function calculateTotal() {  
    const fisrtClassTotalQuantity = document.getElementById('firstClass-ticket-quantity').value;
    const ecoClassTotalQuantity = document.getElementById('ecoClass-ticket-quantity').value;
    const totalPrice = fisrtClassTotalQuantity * 150 + ecoClassTotalQuantity * 100;

    document.getElementById('sub-total').innerText = ('$' + totalPrice);
    const vat = Math.round(totalPrice * .10);
    document.getElementById('vat').innerText = ('$' + vat);
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// book now button handler
document.getElementById('book-now').addEventListener('click', function(){
    const bookArea = document.getElementById('book-area');
    bookArea.style.display = 'none';

    const ticketsDetails = document.getElementById('tickets-details');
    ticketsDetails.style.display = 'block';
// take count and total prices for first classes
    const firstClassCount = document.getElementById('firstClass-ticket-quantity');
    allFirstClass = parseInt(firstClassCount.value);
    document.getElementById('first-class-final-quantity').innerText = allFirstClass;
// economy classes final output
    const ecoClassCount = document.getElementById('firstClass-ticket-quantity');
    allEcoClass = parseInt(ecoClassCount.value);
    document.getElementById('economy-class-final-quantity').innerText = allFirstClass;


    
    // console.log('book now works');
})