import { patientsTypes } from "../types";

export function signIn(email) {
    return {
        type: patientsTypes.SIGN_IN,
        patient: {
            email
        }
    }
}

export function verify(email, otp) {
    return {
        type: patientsTypes.VERIFY,
        patient: {
            email,
            otp,
            id: Math.random()
        }
    }
}

export function getMe(first_name, last_name,age) {
    return {
        type: patientsTypes.GET_ME,
        patient: {
            first_name,
            last_name,
            age
        }
    }
}

export function updateMe(first_name, last_name,age) {
    return {
        type: patientsTypes.UPDATE_ME,
        patient: {
            first_name,
            last_name,
            age
        }
    }
}