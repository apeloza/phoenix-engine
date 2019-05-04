import { createStore } from 'redux';
import phoenixReducers from './Combine-reducers';

const store = createStore(phoenixReducers);

export default store;
