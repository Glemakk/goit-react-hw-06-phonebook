import { ITEM_ADD, ITEM_DELETE } from '../types/phoneBook-types'
// import ITEM_DELETE from '../types/phoneBook-types'
const initialState = []

const itemsReducer = (state = initialState, action) => {
  console.log('action.type >>', action)
  switch (action.type) {
    case ITEM_ADD:
      return [...state, action.payload]
    case ITEM_DELETE:
      return state.filter((item) => item.id !== action.payload)
    default:
      return state
  }
}

export default itemsReducer
