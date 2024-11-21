function handleKey(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-input');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost = cost + 10
  }

  document.querySelector('.js-total')
    .innerHTML = (`$${cost}`)
}