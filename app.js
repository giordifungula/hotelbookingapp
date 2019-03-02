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
    
}

function calculateHotel(){
    // element();
    getHotel();
    alert('Calculate done');
}