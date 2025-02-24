import { combineReducers } from 'redux';
import { patientsReducer } from './patientsReducer';
import { doctorsReducer } from './doctorsReducer';

const reducers = combineReducers(
    {
        patients: patientsReducer,
        doctors: doctorsReducer
    }
);

export default reducers;

