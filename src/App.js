import React from 'react';
import WelcomePage from './containers/pages/WelcomePage'
import IntroduceWebsite from './containers/pages/IntroduceWebsite'
import LoginPage from './containers/pages/LoginPage'
import RegisterPage from './containers/pages/RegisterPage'
import ProfilePage from './containers/pages/ProfilePage'
import EditSituationPage from './containers/pages/EditSituationPage'
import Income from './containers/pages/Income'
import Expenditure from './containers/pages/Expenditure'
import Target from './containers/pages/Target'
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'> <WelcomePage /> </Route>
        <Route path='/intro'> <IntroduceWebsite /> </Route>
        <Route path='/login'> <LoginPage /> </Route>
        <Route path='/register'> <RegisterPage /> </Route>
        <Route path='/profile'> <ProfilePage /> </Route>
        <Route path='/edit-profile'> <EditSituationPage /> </Route>
        <Route path='/income'> <Income /> </Route>
        <Route path='/expenditure'> <Expenditure /> </Route>
        <Route path='/target'> <Target /> </Route>
      </Switch>
    </div>
  );
}

export default App;
