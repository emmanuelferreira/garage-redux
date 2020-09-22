import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarsIndex from './containers/cars_index';

import { carsReducer } from './reducers/carsReducer';

import '../assets/stylesheets/application.scss';

// eslint-disable-next-line no-alert
const garageName = "Emma Garage";

const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  // eslint-disable-next-line no-unused-vars
  garage: (state = null, action) => state,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <div className="view-container">
      <Switch>
        <Route path="/" component={CarsIndex} />
      </Switch>
    </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
