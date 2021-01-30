// const plusBtn = document.getElementById('plus-btn');
// const btnClick = plusBtn.addEventListener('click', function () {
//     quantityChanges(true);
// })
// const minusBtn = document.getElementById('minus-btn');
// const minusBtnClick = minusBtn.addEventListener('click', function () {
//     quantityChanges(false);
// })



function quantityChanges(isIncrease) {
    const ticketQuantityInput = document.getElementById('ticket-quantity');
    const ticketQuantityNo = parseInt(ticketQuantityInput.value);
    let ticketQuantityNewNoCount = 0;
    if (isIncrease == true) {
        ticketQuantityNewNoCount = ticketQuantityNo + 1;
    }
    if (isIncrease == false && ticketQuantityNo > 0) {
        ticketQuantityNewNoCount = ticketQuantityNo - 1;
    }

    ticketQuantityInput.value = ticketQuantityNewNoCount;
    document.getElementById('ticket-quantity').innerText = (ticketQuantityNewNoCount);
    const totalPrice = ticketQuantityNewNoCount * 150;
    document.getElementById('sub-total').innerText = (totalPrice);
    const vat = totalPrice * .10;
    document.getElementById('vat').innerText = (vat);
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = grandTotal;

}




// // plus button for first class
// const plusBtn = document.getElementById('plus-btn');
// const btnClick = plusBtn.addEventListener('click', function(){
//     const ticketQuantityInput = document.getElementById('ticket-quantity');
//     const ticketQuantityNo = parseInt(ticketQuantityInput.value);
//     const ticketQuantityNewNoCount = ticketQuantityNo + 1;
//     ticketQuantityInput.value = ticketQuantityNewNoCount;
//     document.getElementById('ticket-quantity').innerText = (ticketQuantityNewNoCount);

//     const totalPrice = ticketQuantityNewNoCount * 150;
//     document.getElementById('sub-total').innerText = (totalPrice);
//     const vat = totalPrice * .10;
//     document.getElementById('vat').innerText = (vat);
//     const grandTotal = totalPrice + vat;
//     document.getElementById('grand-total').innerText = grandTotal;

//     // console.log(ticketQuantityNewNoCount);
//     // console.log(totalPrice);
// })

// const minusBtn = document.getElementById('minus-btn');
// const minusBtnClick = minusBtn.addEventListener('click', function(){
//     const ticketQuantityInput = document.getElementById('ticket-quantity');
//     const ticketQuantityNo = parseInt(ticketQuantityInput.value);
//     const ticketQuantityNewNoCount = ticketQuantityNo - 1;

//     if(ticketQuantityNewNoCount > 0){
//         ticketQuantityInput.value = ticketQuantityNewNoCount;
//         document.getElementById('ticket-quantity').innerText = (ticketQuantityNewNoCount);
//     }

//     const totalPrice = ticketQuantityNewNoCount * 150;
//     document.getElementById('sub-total').innerText = (totalPrice);
//     const vat = totalPrice * .10;
//     document.getElementById('vat').innerText = (vat);
//     const grandTotal = totalPrice + vat;
//     document.getElementById('grand-total').innerText = grandTotal;

// })