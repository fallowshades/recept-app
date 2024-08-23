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
