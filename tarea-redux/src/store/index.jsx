
import {createStore, combineReducers} from "redux";

import valorReducer from './valor/Reducer';

const reducers = combineReducers({
    valorReducer
});

const store = createStore(reducers);

export default store