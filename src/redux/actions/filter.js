import { FILTER_FIND } from '../types/phoneBook-types'
console.log('FILTER_FIND >>', FILTER_FIND)

export const filterItem = (value) => ({
  type: FILTER_FIND,
  payload: value,
})
