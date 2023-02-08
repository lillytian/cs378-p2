// elems that indicate the amount of each food
let macAmount = document.getElementById('mac-amt');
let pastaAmount = document.getElementById('pasta-amt');
let tacoAmount = document.getElementById('taco-amt');
let enchiladaAmount = document.getElementById('enchilada-amt');
let totalAmount = document.getElementById('total-amt');

// buttons for increasing food
let decrButtons = document.getElementsByClassName('btn-quantity-decr');
for (let btn of decrButtons) {
    btn.addEventListener('click', decrementQuantity);
}

// buttons for decreasing food
let incrButtons = document.getElementsByClassName('btn-quantity-incr');
for (let btn of incrButtons) {
    btn.addEventListener('click', incrementQuantity);
}

// clear all button
let clearAllBtn = document.getElementById('clear-all');
clearAllBtn.addEventListener('click', clearAllQuantity)

// order button
let orderBtn = document.getElementById('order');
orderBtn.addEventListener('click', onOrderHandle);

function decrementQuantity() {
    let id = this.id;
    let elem;

    // get correct element to edit
    if (id === 'mac-decr') {
        elem = macAmount;
    } else if (id === 'pasta-decr') {
        elem = pastaAmount;
    } else if (id === 'taco-decr') {
        elem = tacoAmount;
    } else {
        elem = enchiladaAmount;
    }

    // only decrement var if it is not 0
    let num = parseInt(elem.innerHTML);
    if (num !== 0) {
        num--;
        elem.innerHTML = num;
        editSubtotal(id.split('-')[0], false);
    }
}

function incrementQuantity() {
    let id = this.id;
    let elem;

    // get correct element to edit
    if (id === 'mac-incr') {
        elem = macAmount;
    } else if (id === 'pasta-incr') {
        elem = pastaAmount;
    } else if (id === 'taco-incr') {
        elem = tacoAmount;
    } else {
        elem = enchiladaAmount;
    }

    elem.innerHTML = parseInt(elem.innerHTML) + 1;
    editSubtotal(id.split('-')[0], true);
}

function clearAllQuantity() {
    let items = document.getElementsByClassName('quantity-amt');
    for (let item of items) {
        item.innerHTML = 0;
    }
    totalAmount.innerHTML = 0;
}

function editSubtotal(item, incr) {
    let price = document.getElementById(`${item}-price`);
    let currTotal = parseInt(totalAmount.innerHTML);

    if (incr) {
        currTotal += parseInt(price.innerHTML);
    } else {
        currTotal -= parseInt(price.innerHTML);
    }

    totalAmount.innerHTML = currTotal;
}

function onOrderHandle() {
    if (parseInt(totalAmount.innerHTML) === 0) {
        alert("No items in cart.")
    } else {
        let message = "Order placed!\n";
        if (macAmount.innerHTML !== 0) {
            message += `${macAmount.innerHTML} mac & cheese, `;
        }
        if (pastaAmount.innerHTML !== 0) {
            message += `${pastaAmount.innerHTML} pasta, `;
        }
        if (tacoAmount.innerHTML !== 0) {
            message += `${tacoAmount.innerHTML} taco, `;
        }
        if (enchiladaAmount.innerHTML !== 0) {
            message += `${enchiladaAmount.innerHTML} enchilada, `;
        }

        // get rid of last comma and space
        message = message.substring(0, message.length - 2);
        alert(message);
    }
}