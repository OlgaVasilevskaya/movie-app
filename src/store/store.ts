import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalReducer from './reducers/modal/modalSlice';
import moviesReducer from './reducers/movies/moviesSlice';
import userReducer from './reducers/authorization/userSlice';
import detailsReducer from './reducers/movies/detailsSlice';

const rootReducer = combineReducers(
  {
    modal: modalReducer,
    movies: moviesReducer,
    details: detailsReducer,
    user: userReducer,
  },
)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['movies', 'details', 'modal'] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
