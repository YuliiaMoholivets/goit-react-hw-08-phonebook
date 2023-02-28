import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {store, persistor}  from 'redux/store';
import './index.css';
import {App} from 'components/App/App';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter  basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
         </Provider>
      </PersistGate>
  </React.StrictMode>
);
