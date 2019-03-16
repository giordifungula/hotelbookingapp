// Grab the priceOutput Element 
let priceDisplay = document.getElementById('total');
let beforeImageContainer = document.getElementById('daysValue');
// Declare the Price variable
let COMPACT_PRICE, totalCost;
// Assign the Value of radio
let currentValue = 0;

function element(e){
    return document.getElementById(e);
    // === Return Any ID element === 
}

function getHotel(){
    let hotelValue = element('hotelValue').value;
    console.log('Value selected is ', hotelValue);
    // === Collects the Hotel Value === //
    if(hotelValue == 1) {
        // == If Compact is Selected ==
        COMPACT_PRICE = 1000;
        alert(COMPACT_PRICE);
    } else if (hotelValue == 2){
        COMPACT_PRICE = 2000;
        // alert(1);
    } else if (hotelValue == 3) {
        COMPACT_PRICE = 3000;
        alert(COMPACT_PRICE);        
    }
    console.log(hotelValue,'THE price will be ', COMPACT_PRICE);
}
function getDays(radio){
    // alert('Old value:' + currentValue);
    // alert('New value:' + radio.value);
    currentValue = radio.value;
    totalCost = currentValue * COMPACT_PRICE;
    console.log(' Total Price: ', totalCost);
    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'price');
    h1.textContent = 'The Price will be:' + totalCost;
    beforeImageContainer.appendChild(h1);
}

function calculateHotel(){
    // element();
    getHotel();
}

