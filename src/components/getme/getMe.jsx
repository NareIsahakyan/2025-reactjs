import { useActionState, useContext} from "react";
import { getMe } from "../../services/api/auth";
import AuthContext from "../../context/authContext";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { patientsAction } from "../../store/actions";

const GetMe = () => {
    const dispatch = useDispatch();
    const { login: contextLogin, isAutorization, logout } = useContext(AuthContext);
    const [data, action, isProgress] = useActionState(async (data, state) => {
        const firstName = state.get('firstName');
        const lastName = state.get('lastName');
        const age = state.get('age');
       
        dispatch(patientsAction.getMe(firstName, lastName, age));

        if (firstName && lastName && age) {
            if (!firstName && !lastName && !age) {
                return { data: {}, error: "Information about yourself not found" }
            } else {
                try {
                    const data = await getMe(firstName, lastName, age);
                    if (data.status === 200) {
                        contextLogin(data.result);
                        
                    }
                    console.log(data);
                    return { data, error: null }
                } catch (error) {
                    return { data: {}, error: "Something went wrong" }
                }
            }
        }
    }, { data: {}, error: null });

    return (
        <>
            <div className="getMe">
                <h1 style={{ color: "rgb(81, 81, 112)", textAlign: "center", width: "300px", marginLeft: '100px' }}>Please submit information about yourself?</h1>
                {isAutorization ? <button onClick={logout}>Logout</button> : <form action={action}>
                    <input type="text" name="firstName" placeholder="Name" /><br />
                    <input type="text" name="LastName" placeholder="Surname" /><br />
                    <input type="text" name="age" placeholder="Age" /><br />
                    <Link to={`/patientsProfile`}><button type="submit">Next</button></Link>
                </form>}
            </div>
        </>
    )
}
export default GetMe;