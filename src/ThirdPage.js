import { useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

function ThirdPage() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        navigate("/fourthPage", { state: {email, password}});
    };

  return (
    <div className="App">
        <h1>Third Page</h1>
        <p>Enter your details</p>
        <form id="login-form" onSubmit={
            submitForm
        }>
            <label>Email</label>
            <input id="email-input" type="email" value={email} 
            onChange={(e) => setEmail(e.target.value)}></input>
            <br/>
            <label>Password</label>
            <input id="password-input" type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}></input>
            <br/>
            <button id="submit-button" type="submit">Submit</button>
        </form>
        
    </div>
  );

}

export default ThirdPage;
