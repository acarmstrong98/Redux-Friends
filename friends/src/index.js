import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './App';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>, 

document.getElementById('root'));