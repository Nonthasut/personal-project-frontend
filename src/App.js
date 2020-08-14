import React,{useState} from 'react';
// import WelcomePage from './containers/pages/WelcomePage'
// import IntroduceWebsite from './containers/pages/IntroduceWebsite'
// import LoginPage from './containers/pages/LoginPage'
// import RegisterPage from './containers/pages/RegisterPage'
// import ProfilePage from './containers/pages/ProfilePage'
// import EditSituationPage from './containers/pages/EditSituationPage'
// import Income from './containers/pages/Income'
// import Expenditure from './containers/pages/Expenditure'
// import Target from './containers/pages/Target'
// import { Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './containers/pages/private-routes/PrivateRoutes';
import LocalStorageService from './config/service'
import Navbar from './components/Navbar'

function App() {
  const [role,setRole] =useState(LocalStorageService.getRole())
  return (
    <div className="App">
      <Navbar/>
      <PrivateRoutes role={role} setRole={setRole}/>

    </div>
  );
}

export default App;
