import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeCar } from '../actions';
import Aside from '../components/aside';

class CarsShow extends Component {
  componentWillMount() {
    this.props.getCar(carID);
  }

  render() {
    return [
      <Aside key="aside" garage={this.props.garage} >
        <Link to="/cars/new"> Add car </Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <img className="car-logo" src={`https://source.unsplash.com/featured/?${car.brand} ${car.model}`} alt="car" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li> <strong>Owner:</strong> {car.owner} </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps, { getCar, removeCar })(CarsShow);
