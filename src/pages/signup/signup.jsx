import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !username.trim() || !password.trim() || !reEnterPassword.trim() || !email.trim() || !phoneNumber.trim() || !agreeTerms) {
      setErrorMessage('Please fill in all fields and agree to the terms.');
    } else {
        navigate('/home');
      // Perform sign-up action (e.g., API call)
      console.log('Full Name:', fullName);
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Re-enter Password:', reEnterPassword);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      // Navigate to the home page or perform other actions

    }
  };

  return (
    <div className="container my-5">
    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Re-Enter Password"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="checkbox">
            I agree to the <a href="#">Terms & Condition</a>
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-3">Sign up</button>
      </form>
      <div className="member">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
