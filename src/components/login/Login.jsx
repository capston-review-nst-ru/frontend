import React from 'react';
import './login.css';

const Login = ({ switchToRegister }) => {
  return (
   <>
    <p className="modalHeader">Welcome Back</p>
    <p className="modalSubHeader">Dont have an account? 
    <a href="#" onClick={(e) => { e.preventDefault(); switchToRegister(); }} className="modalSubHeaderLink">
          Register
        </a>
         </p>
    <form action="" className="modalFormContainer">
        <label htmlFor="modalEmailContainer" className="modalEmailLabel">Email</label>
        <input type="email" id="modalEmailContainer" className="modalEmailContainer" required />

        <label htmlFor="modalPasswordContainer" className="modalPasswordLabel">Password</label>
        <input type="password" id="modalPasswordContainer"  className="modalPasswordContainer" required />
       
        <input type="submit" value="Log in" className="modalSubmitButton" />
    </form>
   </>
  )
}

export default Login;