import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import Store from './redux/Store'

import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(
  <ToastProvider
    placement="bottom-right"
    autoDismiss
    autoDismissTimeout={3000}
  >
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ToastProvider>,
  document.getElementById('root')
);

reportWebVitals();
