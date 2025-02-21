import { useActionState, useContext, useEffect, useState } from "react";
import { login, verify } from "../../services/api/auth";
import AuthContext from "../../context/authContext";

const Autorization = () => {
    const {login:contextLogin,logout} = useContext(AuthContext)
    const [isShow, setIsShow] = useState(false);

    const [data, action, isProgress] = useActionState(async (data, state) => {
        const email = state.get('email');
        const otp = state.get('otp');
        if(otp){
         if(!otp && !email){
            return{data:{}, error:"Email and OTP are required"}
         } else{
            try {
                const data = await verify(email,otp);
                if (data.status === 200) {
                    contextLogin(data.result);
                }
                console.log(data);
                
                return { data, error: null }
            } catch (error) {
                return { data: {}, error: "Sonething went wrong" }
            }
         }
        } else{
            if (!email) {
                return { data: {}, error: "Email is required" }
            } else {
                try {
                    const data = await login(email);
                    console.log(data);
                    if (data.status === 200) {
                        setIsShow(true);
                    }
                    return { data, error: null }
                } catch (error) {
                    return { data: {}, error: "Sonething went wrong" }
                }
    
            }
            return { data: { email }, error: null }
        }
       
    }, { data: {}, error: null });

    return (
        <div className="autorization">
            <h1>Login</h1>
            <form action={action}>
                <input type="email" name="email" placeholder="Email" />
                {isShow && <input type="text" name="otp" placeholder="OTP" />}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Autorization;