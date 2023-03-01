import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartReducer from './cart/cartSlice'
import CategoriesReducer from './categories/categoriesSlice'
import UserReducer from './user/userSlice'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const rootReducer = combineReducers({
  cart: CartReducer,
  categories: CategoriesReducer,
  user: UserReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(middleWares),
})

export const persistor = persistStore(store)