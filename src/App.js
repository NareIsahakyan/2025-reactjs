
import './App.css';
import Autorization from "./components/autorization/autorization";
import './components/autorization/autorization.css'
import PatientsProfile from './components/profile/PatientsProfile';
import './components/profile/patientsProfile.css';
import { Route, Routes} from 'react-router-dom';
import * as React from 'react';
import { AuthProvider } from './context/authContext';
import GetMe from './components/getme/getMe';
import './components/getme/getmestyle.css';


function App() {
  
  return (
  <><AuthProvider>
    <div className="App">
    <Routes >
        <Route path='/' element={<Autorization/>}/>
        <Route path ='/getMe' element={<GetMe />}/>
        <Route path ='/patientsProfile' element={<PatientsProfile/>}/>
        <Route path='*' element={<div style={{fontSize :"50px", color:'#56CCF2', marginTop:'150px' }}>Not Found</div>} />
      </Routes>
    </div>
    </AuthProvider></>
  );
}

export default App;
