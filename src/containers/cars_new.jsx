import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { createCar } from '../actions';
import Aside from '../components/aside';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return [
      <Aside key="aside" garage={this.props.garage} >
        <Link to="/"> Back to list </Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560454356-3412f0c59eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')" }}>
        <div className="overlay" />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <Field label="brand" name="brand" placeholder="PEUGEOT" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <Field label="model" name="model" placeholder="106" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <Field label="owner" name="owner" placeholder="Séb Saunier" type="text" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="plate">Plate</label>
            <Field label="plate" name="plate" placeholder="123AZ56" type="text" component="input" className="form-control" />
          </div>
          <button type="submit"> Create Car </button>
        </form>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(mapStateToProps, { createCar })(CarsNew)
);
