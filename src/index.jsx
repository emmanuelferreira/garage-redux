import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

import carsReducer from './reducers/cars_reducer';

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
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id"  component={CarsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
