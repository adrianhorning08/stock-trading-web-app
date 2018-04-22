import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchStock } from './util/stocks_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {entities: {session: {currentUser: window.currentUser}}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);
// testing
window.fetchStock = fetchStock;
});
