import { useContext, useEffect, useMemo } from "react"
import AuthContext from "../../context/authContext"
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../store/selectors/patientsSelector";
import { patientsSelector } from "../../store/selectors";
import { patientsAction } from "../../store/actions";
export default function PatientsProfile(){
    const patients = useSelector(getPatients);
    const dispatch = useDispatch();
    
    const {patient} = useContext(AuthContext);
    useEffect(()=>{
       
        if(patients){
            return patients.map((patient)=>{
                <div key ={patient.id}>
                    <span>{patient.first_name}</span> 
                    <span>{patient.last_name}</span> 
                    <span>{patient.age}</span> 
                </div>
            })
        }else{
            return "Patient not found";
        }
    },[dispatch])
    const content = useMemo(()=>{
        if(patients){
            return patients.map((patient)=>{
                <div key ={patient.id}>
                    <span>{patient.first_name}</span> 
                    <span>{patient.last_name}</span> 
                    <span>{patient.age}</span> 
                </div>
            })
        }else{
            return "Patient not found";
        }
    })
    console.log(patient)
    return(
        <div className="patientProfile">
            <h1>Patients Profile</h1>
           { patients.map((patient)=>{
            <div key ={patient.id}>
                    <span>{patients.first_name}</span> 
                    <span>{patients.last_name}</span> 
                    <span>{patients.age}</span> 
                    </div>})
}
           </div>
    )
}