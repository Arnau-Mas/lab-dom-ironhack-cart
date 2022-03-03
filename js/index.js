// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalElement = product.querySelector(".subtotal span");
  let subtotalPrice = price*quantity;
  subtotalElement.textContent = parseInt(subtotalPrice);


  return subtotalPrice;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  const totalValue = document.querySelector("#total-value span");
  let finalPrice = 0;
  allProducts.forEach((product) => {
    let subTotal = updateSubtotal(product);
    finalPrice +=  parseInt(subTotal);
    totalValue.innerText = finalPrice;
  })
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
