import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
// import { addCharacterById } from './actions/index'

const store = createStore(rootReducer);
// console.log("store.getState", store.getState());
// store.subscribe(() => console.log("store", store.getState()));
// store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)