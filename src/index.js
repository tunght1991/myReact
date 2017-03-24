import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducers';
import './index.css';

const initialState = {}

const store = createStore(rootReducer, initialState);

const appRoot = (
  <Provider store={store}>
    <div>
      <TodoApp />
    </div>
  </Provider>
)
ReactDOM.render(
  appRoot,
  document.getElementById('root')
);
