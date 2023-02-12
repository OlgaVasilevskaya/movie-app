import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '../node_modules/i18next/i18next';

import { PersistGate } from 'redux-persist/es/integration/react';

import store, { persistor } from './store/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
