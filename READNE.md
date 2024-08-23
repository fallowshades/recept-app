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

####

src\pages\shadowDOM\store.js

DisplayDOMElement.js

src\utils\getElement.js
