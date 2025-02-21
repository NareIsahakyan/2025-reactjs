import { api } from "./api"

export async function login(email) {
    try {
        const rez = await api.post('/user/auth/patient/sign_in', {email})
        return rez.data;
    } catch (error) {
        console.log(error);
    }
}


export async function verify(email,otp) {
    try {
        const rez = await api.post("/user/auth/verify_otp", {email,otp})
        return rez.data;
    } catch (error) {
        console.log(error);
    }

}

export async function getMe() {
    try {
        const rez = await api.get("/user/me")
        return rez.data;
    } catch (error) {
        console.log(error);
    }

}