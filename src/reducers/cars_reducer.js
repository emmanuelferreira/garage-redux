import { FETCH_CARS, CAR_REMOVED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case CAR_REMOVED:
      return state.filter(car => car !== action.payload);
    default:
      return state;
  }
}
