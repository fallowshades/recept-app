#

##

###

#### script.js entrypoint accessible state to toggle and or move elements ++

liveServer extention (Ctrl + Shift + X) --> see botum right corner with prettier

index.js

- react has a entry file that load data and render dynamically
- one wrapp the store here so the arrays are accessible to the function calls that are specified below.
- afterwards its propdrilling to display or a context to get hooked to programming

```js
// specific imports
import { setupStore, store } from './src/shadowDOM/store.js'
import { displayComponentWithPropDrilling } from './DisplayDOMElement.js'
import { loader } from './src/utils/receipesLoader.js'
import { getElement } from './src/utils/localStore_QuerySelector_formating.js'
// import display from './src/displayProducts.js'
// import { getElement } from './src/utils.js'

//static html is loaded, now dynamic DOM manipulation
const init = async () => {
  const receipts = await loader()
  console.log('loaded data')
  if (receipts) {
    //wish to render dynamically to add to
    setupStore(receipts)
    //const featured = store.filter((product) => product.featured === true)

    displayComponentWithPropDrilling(receipts, getElement('.receipts-center'))
  }
}

window.addEventListener('DOMContentLoaded', init)
```

src\pages\about.js

```js
import '../cart/setupCart.js'
```

src\pages\AllPage.js

```js
import '../cart/setupCart.js'
```

src\pages\[idPage].js

```js
import '../cart/setupCart.js'
```

cart\setUpCart.js

```js
export const addToCart = (id) => {
  //add to array that exist in local storage
}
```

uh changes module script to index.js

#### react must have access to the elements with a key

- earth is not flat and should not be atempted to write code in a single file. a tree structure lets you break the 2d mindset into 3d

```js
...
  <div class="receipts-center section-center">
      <h2 class="section-loading">loading...</h2>
      <!--code splitting-->
    </div>

    <div class="cart-overlay"></div>
    <h1>pagination starter</h1>
 ...
    <script type="module" src="./index.js"></script>
```

src\utils\receipesLoader.js

```js
export const loader = () => {
  setTimeout(() => {
    console.log('see skeletons')
  }, '3000')
  const receipt = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      ingredients: ['Freshly ground black pepper', 'Salt'],
      instructions: []
      ..
    }
    ...
  ]
  return receipt
}
```

src\pages\shadowDOM\store.js

- load an array of objects

```js
import {
  getStorageItem,
  setStorageItem,
} from '../utils/localStore_QuerySelector_formating.js'

let store = getStorageItem('store')

//loaded data is in the form of an array with obj (can access to render dynamicaly)
const setupStore = (mountedData) => {
  //[state,setState] = useState() (simple useState implementation)
  if (!Array.isArray(mountedData)) {
    console.error('mountedData is not an array', mountedData)
    return
  }

  store = mountedData.map((data) => {
    const { id, title, ingredients, instructions, imageURL } = data
  })
  setStorageItem('store', store)
}

//which item to perform the DOM manipulation on
const findDomElement = (id) => {
  let elementData = store.find((elementData) => elementData.id === id)
  return elementData
}

export { store, setupStore, findDomElement }
```

DisplayDOMElement.js

```js
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
```

src\utils\getElement.js

```js

```
