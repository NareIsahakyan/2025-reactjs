import { useContext, useMemo } from "react"
import AuthContext from "../../context/authContext"

export default function UserProfile(){
    const {user} = useContext(AuthContext);
    const content = useMemo(()=>{
        if(user){
            return Object.keys(user).map((key)=>{
                <div key ={key}>
                    <span>{key}</span> 
                    <span>{user[key]}</span> 
                </div>
            })
        }else{
            return "User not found";
        }
    })
    return(
        <div>
            <h1>User Profile</h1>
           <p>{user && user.first_name}</p>
           <p>{user && user.email}</p>
           </div>
    )
}