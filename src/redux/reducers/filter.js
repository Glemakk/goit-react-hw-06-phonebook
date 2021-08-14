import { FILTER_FIND } from '../types/phoneBook-types'
import { createAction } from '@reduxjs/toolkit'

const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FIND:
      return action.payload
    default:
      return state
  }
}

export default filterReducer
