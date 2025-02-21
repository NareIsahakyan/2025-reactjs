import axios from "axios";

const api = axios.create({
    baseUrl:"https://armbionicsapi.annaniks.com/api"
})

export{api};