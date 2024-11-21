let cartQty = 0;

function showCart() {
    console.log(`Cart Quantity: ${cartQty}`);
}

function addCart1() {
    cartQty++;
    console.log(`Cart Quantity: ${cartQty}`);
}

function addCart2() {
    cartQty += 2;
    console.log(`Cart Quantity: ${cartQty}`);
}

function addCart3() {
    cartQty += 3;
    console.log(`Cart Quantity: ${cartQty}`);
}

function resetCart() {
    cartQty = 0;
    console.log(`Cart Quantity: ${cartQty}`);
}