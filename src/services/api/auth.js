import { api } from "./api"

export async function login(email) {
    try {
        const rez = await api.post('/user/auth/patient/sign_in', { email });
        return rez.data;
    } catch (error) {
        console.log(error);
    }
}


export async function verify(email, otp) {
    try {
        const rez = await api.post("/user/auth/verify_otp", { email, otp });
        return rez.data;
    } catch (error) {
        console.log(error);
    }
}

export async function  getMe(first_name, last_name, age){
    try {
        const rez = await api.get("/user/me", { first_name, last_name, age})
        return rez.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateMe(first_name, last_name) {
    try {
        const rez = await api.put("/user/update_me", { first_name, last_name });
        return rez.data;
    } catch (error) {
        console.log(error);
    }
}