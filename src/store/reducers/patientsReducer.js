import { patientsTypes } from "../types";
import { login, verify,getMe } from "../../services/api/auth";

export function patientsReducer(state = [], action) {
    switch (action.type) {
        case patientsTypes.SIGN_IN:
            return [...state, action.patient];
        case patientsTypes.VERIFY:
            return [...state, action.patient];
        case patientsTypes.GET_ME:
           
            return [...state,
                action.patient
           ]
        case patientsTypes.UPDATE_ME:
            return [
                state = state.filter(patient => patient.id !== action.id),
                action.patient
            ]
        default:
            return state;
    }
}