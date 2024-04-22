import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from "../services/CryptoAPI";
import { cryptoNewsApi } from "../services/CryptoNewsAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
