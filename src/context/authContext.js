import { createContext, useCallback, useState } from "react";

const AuthContext=createContext();
export default AuthContext;

export const AuthProvider = ({children})=>{
    const [user,setUser]= useState(null);
    const [isAutorization, setIsAutorization]= useState(false);
    const login = useCallback((user,accessToken) =>  {
        setUser(user);
        setIsAutorization(true);
    },[])
    const logout = useCallback((user) =>  {
        setUser(null);
        setIsAutorization(false);
    },[])

    return <AuthContext.Provider value = {{
        user,
        login,
        isAutorization,
        logout
    }}>
        {children}
    </AuthContext.Provider>;
};