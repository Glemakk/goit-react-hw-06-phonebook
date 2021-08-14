import { ITEM_ADD, ITEM_DELETE } from '../types/phoneBook-types'
// import ITEM_DELETE from '../types/phoneBook-types'
console.log('ITEM_ADD, ITEM_DELETE >>', ITEM_ADD, ITEM_DELETE)
console.log('ADD_ITEM >>', ITEM_ADD)

export const addItem = (formData) => ({
  type: ITEM_ADD,
  payload: formData,
})

export const deleteItem = (id) => ({
  type: ITEM_DELETE,
  payload: id,
})
