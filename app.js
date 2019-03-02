function element(e){
    return document.getElementById(e);
    // === Return Any ID element === 
}
function getHotel(){
    let hotelValue = element('hotelValue').value;
    // === Collects the Hotel Value === //
    if(hotelValue === 1) {
        // == If Compact is Selected ==
        let COMPACT_PRICE = 1000;
    } else if (hotelValue === 2){
        let COMPACT_PRICE = 2000;
    } else if (hotelValue === 3) {
        let COMPACT_PRICE = 3000;
    }
    console.log(hotelValue);
}
function getDays(){
    // Collect the number of days
    let numDays = element('daysValue');
    let inputNumDays = numDays.childNodes[0].value;
    console.log(numDays);
    console.log(inputNumDays);
}

function calculateHotel(){
    // element();
    getHotel();
    getDays();
    alert('Calculate done');
}