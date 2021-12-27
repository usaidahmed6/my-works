let price = + prompt("enter amount")
document.getElementById('amo').innerHTML = price;
function getDiscountPrice(price) {
    if (price <=  1000) {
document.getElementById('dis').innerHTML = price;
   return price
    }
    else if (price > 1000 && price <= 10000) {
        var discount = price * 0.10;
        document.getElementById('dis').innerHTML =Math.round(discount);
        return price - discount
    }
    else {
        var disc = price * 0.20;
        document.getElementById('dis').innerHTML = Math.round(disc);
        return price - disc
    }

}
document.getElementById('total-amo').innerHTML = Math.round(getDiscountPrice(price));