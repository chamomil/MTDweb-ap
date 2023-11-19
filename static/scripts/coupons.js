document.addEventListener('DOMContentLoaded', function () {
    const session_prices = document.querySelectorAll('.ticket_price');

    document.getElementById('coupon_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let coupon = document.getElementById('coupon_input').value;
    console.log(coupon);
    for (let price of session_prices) {
        let oldPrice = parseInt(price.innerHTML);
        price.innerHTML = (oldPrice * GetDiscount(coupon)).toString();
    }
});
});


function GetDiscount(coupon) {
    if (coupon === '1020') {
        return 0.9;
    } else if (coupon === '2721') {
        return 0.95;
    } else {
        return 1;
    }
}