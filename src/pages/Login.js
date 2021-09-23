import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { setUserSession } from '../utils/Common';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
//  const role = useFormInput('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  var apiUrl = '';

  // handle button click of login form
  const handleLogin = () => {
    if (role === 'transporter'){
      apiUrl = `${process.env.REACT_APP_SERVER_URL}/auth/transporter`;
    }else{
      apiUrl = `${process.env.REACT_APP_SERVER_URL}/auth/shipper`;
    }
    
      setError(null);
      setLoading(true);
      axios.post(apiUrl, { username: username.value, password:password.value}).then(response => {
          setLoading(false);

          if (response.data.error === 1) {
            setError(response.data.error_msg);
          } else {
            setUserSession(response.data.data.users.token, response.data.data.users.username, response.data.data.users.role);
            props.history.push('/home');
          }
      }).catch(error => {
          setError("Something went wrong");
      });
    
  }

  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    <div>
      <h3>Login</h3><br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      <div>
        <p>Please select your roles:</p>
          <Col sm={6}>
            <Form.Check
                type="radio"
                label="Transporter"
                name="role"
                id="role_transporter"
                value="transporter"
                onChange={e => setRole(e.target.value)}
            />
            <Form.Check
                type="radio"
                label="Shipper"
                name="role"
                id="role_shipper"
                value="shipper"
                onChange={e => setRole(e.target.value)}
            />
          </Col>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
    </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}


export default Login;