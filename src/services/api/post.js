import {api} from "./api";

export const getPosts=async()=>{
    return await api.get("/posts").then((response)=>response.data);
}