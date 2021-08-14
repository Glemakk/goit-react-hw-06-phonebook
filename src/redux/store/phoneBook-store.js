// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/index'
console.log(getDefaultMiddleware())
// import filterReducer from '../reducers/filter'
// import itemsReducer from '../reducers/items'

const middleware = [...getDefaultMiddleware(), logger]

const persistConfig = {
  key: 'contacts',
  storage,
}

// const rootReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// })

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Пишем для себя, чтоб понять структуру
// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// }

// Стандартная болванка reducer
// const reducer = (state = initialState, action) => {
//   console.log('log action in reducer >>', action)
//   return state
// }

// Старое с redux без toolkit
// const store = createStore(rootReducer, devToolsEnhancer())

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

const persistor = persistStore(store)

export default { store, persistor }
