import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./reducer/product";
import thunk from "redux-thunk";
import detailReducer from "./reducer/detail";

const rootReducer = combineReducers({
  products:productReducer,
  detail:detailReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
