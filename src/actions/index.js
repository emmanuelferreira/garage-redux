// TODO: add and export your own actions
const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_REMOVED = 'CAR_REMOVED';

// eslint-disable-next-line import/prefer-default-export
export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}/${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const request = fetch(`${BASE_URL}/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CAR_CREATED,
    payload: request
  };
}


export function removeCar(history, car) {
  fetch(`${BASE_URL}/cars/${car.id}`, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: CAR_REMOVED,
    payload: car
  };
}
