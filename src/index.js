import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { RouterList } from './routes/RouterList';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterList/>
    </Provider>
  </React.StrictMode>
);

