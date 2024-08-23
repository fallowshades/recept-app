// global imports
//import './src/cart/setupCart.js'

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
