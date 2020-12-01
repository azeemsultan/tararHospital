import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/Common/Homepage';
import AcceptApp from './components/Doctors.js/acceptAppointment';
import Doctor from './components/Doctors.js/doctor';
import Login from './components/Login/Login';
import SignUp from './components/Login/Signup';
import SignUpDoctor from './components/Login/SignupDoctor';

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            
            <Route path="/login" component={Login}/> 
            <Route path="/acceptappointment" component={AcceptApp}/> 
            <Route path="/signup" component={SignUp}/> 
            <Route path="/signupdoctor" component={SignUpDoctor}/> 
            <Route path="/doctors" component={Doctor}/> 
            <Route path="/" exact={true} component={Homepage}/> 
            </BrowserRouter> 
  </div>
  );
}

export default App;
