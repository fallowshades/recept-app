import { addToCart } from './src/cart/setupCart.js'

export const displayComponentWithPropDrilling = (
  dynamicData,
  element,
  hasNoEvents
) => {
  element.innerHTML = dynamicData
    .map((idObjToElement) => {
      const { id, title, ingredients, instructions, imageURL } = idObjToElement

      console.log(ingredients)
      console.log(instructions)
      return ` <article class="product">
          <div class="product-container">
            <img src="${imageURL}" class="product-img img" alt="${title}" />
           
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
           
          </footer>
        </article> `
    })
    .join('')

  if (hasNoEvents) return
}
const onClick = () => {
  const parent = e.target.parentElement
  if (parent.classList.contains('product-cart-btn')) {
    //classNames help
    addToCart(parent.dataset.id)
  }
  element.addEventListener('click', onClick)

  //const hoisting https://medium.com/@jeremy_levy/var-let-const-hoisting-and-temporal-dead-zone-in-javascript-d26e2207c823
}
