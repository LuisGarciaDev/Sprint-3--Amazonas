import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

