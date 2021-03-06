import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import CreateHistory from  "history/createBrowserHistory";
//Redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
// React-Router
import { Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history = {CreateHistory()}>
        <App />
      </Router>
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);
