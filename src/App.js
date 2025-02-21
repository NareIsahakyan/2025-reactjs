
import './App.css';
import Autorization from "./components/autorization/Autorization";
import './components/autorization/autorization.css'
import UserProfile from './components/profile/UserProfile';
import { AuthProvider } from './context/authContext';

function App() {
  
  return (
  <><AuthProvider>
    <div className="App">
       <Autorization/>
       <UserProfile/>
    </div>
    </AuthProvider></>
  );
}

export default App;
