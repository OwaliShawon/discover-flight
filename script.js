const plusBtn = document.getElementById('plus-btn');
const btnClick = plusBtn.addEventListener('click', function(){
    const ticketQuantityInput = document.getElementById('ticket-quantity');
    const ticketQuantityNo = parseInt(ticketQuantityInput.value);
    const ticketQuantityNewNoCount = ticketQuantityNo + 1;
    ticketQuantityInput.value = ticketQuantityNewNoCount;
    const totalPrice = ticketQuantityNewNoCount * 150;
    document.getElementById('ticket-quantity').innerText = ('ticketQuantityNoCount');


    console.log(ticketQuantityNewNoCount);
    console.log(totalPrice);
})