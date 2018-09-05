import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const user = localStorage.getItem('user');

if(user) {
  store().dispatch({ type: 'AUTHENTICATED' });
}


ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
