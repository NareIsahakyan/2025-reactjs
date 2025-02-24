import { useActionState, useContext, useEffect, useState } from "react";
import { login, verify } from "../../services/api/auth";
import AuthContext from "../../context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { patientsSelector } from "../../store/selectors";

const Autorization = () => {
    const dispatch = useDispatch();
    const patients = useSelector(patientsSelector.getPatients);
    
    const { login: contextLogin, isAutorization, logout } = useContext(AuthContext)
    const [isShow, setIsShow] = useState(false);
    const [isvalid, setIsValid] = useState(false);
    const [data, action, isProgress] = useActionState(async (data, state) => {
        const email = state.get('email');
        const otp = state.get('otp');

        if (otp) {
            if (!otp && !email) {
                setIsValid(false);
                return { data: {}, error: "Email and OTP are required"}
            } else {
                try {
                    const data = await verify(email, otp);
                    if (data.status === 200) {
                        contextLogin(data.result);
                        setIsValid(true);
                    }
                    console.log(data);
                    return { data, error: null }
                } catch (error) {
                    return { data: {}, error: "Something went wrong" }
                }
            }
        } else {
            if (!email) {
                setIsValid(false);
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
                    return { data: {}, error: "Something went wrong" }
                }

            }
        }

    }, { data: {}, error: null });

    return (
        <div className="autorization">
            <h1 className="loginPage">Login</h1>
            {isAutorization ? <button onClick={logout}>Logout</button> : <form action={action}>
                <input type="email" name="email" placeholder="Email" /><br />
                {isShow && <input type="text" name="otp" placeholder="OTP" />}
                {data.error !== null && <p style={{color:"red", textAlign:"center"}}>{data.error}</p>}
                 <button type="submit">Login</button>
                {isvalid && <button type="submit"><Link to={`/GetMe`}>Next</Link></button>}
            </form>}
        </div>
    )
}
export default Autorization;