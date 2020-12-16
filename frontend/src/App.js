import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Admin/Dashboard';
import Homepage from './components/Common/Homepage';
import Chat from './components/Common/Location';
import Locate from './components/Common/Location';
import AcceptApp from './components/Doctors.js/acceptAppointment';
import Doctor from './components/Doctors.js/doctor';
import DocDashboard from './components/Doctors.js/DoctorDashboard';
import Checkout from './components/Doctors.js/Payment';
import Login from './components/Login/Login';
import SignUp from './components/Login/Signup';
import SignUpDoctor from './components/Login/SignupDoctor';
import Pay from "./components/Doctors.js/Pay.js";
import map from "./components/Common/GMap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import MyMap from './components/Common/GoogleMap';
const stripePromise = loadStripe("pk_test_51Hv0nsJTgZiOu1hOrVInzI7eg6QFewzhqEKqlNQrDT0oUaADAQNrM1ng0qz7vojRTZpNY0LA61X9WnO2NB2OZnIH00fsWZQT2C");


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Elements stripe={stripePromise}>
            <Route path="/payment" component={Checkout}/> 
            <Route path="/pay" component={Pay}/> 
            </Elements>
            <Route path="/login" component={Login}/> 
            <Route path="/googlemap" component={MyMap}/> 
            <Route path="/doctordashboard" component={DocDashboard}/> 
            <Route path="/dashboard" component={Dashboard}/> 
            <Route path="/location" component={Chat}/> 
            <Route path="/acceptappointment" component={AcceptApp}/> 
            <Route path="/signup" component={SignUp}/> 
            <Route path="/signupdoctor" component={SignUpDoctor}/> 
            <Route path="/doctors" component={Doctor}/> 
            <Route path="/map" component={map}/> 
            <Route path="/" exact={true} component={Homepage}/> 
            </BrowserRouter> 
  </div>
  );
}

export default App;
