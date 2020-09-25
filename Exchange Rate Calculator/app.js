const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
   const one = currencyEl_one.value; 
   const two = currencyEl_two.value; 

   fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
   .then(res => res.json())
   .then(data => {
       const rate = data.rates[two];
       rateEl.innerText = `1 ${one} = ${rate} ${two}`

       amountEl_two.value = (amountEl_one.value * rate).toFixed(3)
   })
}

// Even Listeners
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('inout', calculate)

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate()
})

calculate();