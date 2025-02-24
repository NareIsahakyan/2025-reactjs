import { doctorsTypes } from "../types";

export function signIn(email) {
    return {
        type: doctorsTypes .SIGN_IN,
        patient: {
            email
        }
    }
}

export function verify(email, otp) {
    return {
        type: doctorsTypes .VERIFY,
        patient: {
            email,
            otp,
            id: Math.random()
        }
    }
}

export function getMe(first_name, last_name,age) {
    return {
        type:doctorsTypes.GET_ME,
        patient: {
            first_name,
            last_name,
            age
        }
    }
}