import { useContext } from "react"
import AuthContext from "../../context/authContext"

export default function UserProfile(){
    const {user} = useContext(AuthContext);
    return(
        <div>
            <h1>User Profile</h1>
            {user ? Object.keys(user).map((key)=>{
                <div key ={key}>
                    <span>{key}</span> 
                    <span>{user[key]}</span> 
                </div>
            }):"User not found"}
        </div>
    )
}