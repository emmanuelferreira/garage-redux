import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from "../actions";

import Aside from '../components/aside';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    return [
      <Aside garage={this.props.garage} />,
      <div className="list-container" key="cars">
        {
          this.props.cars.map((car) => {
            return (
              <div key={car.id} className="car-smallad">
                <img className="car-logo" src="https://source.unsplash.com/?nature,water" alt="car"/>
                <div className="car-details">
                  <span>{car.brand} - {car.model}</span>
                  <ul>
                    <li><strong>Owner:</strong> {car.owner}</li>
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

