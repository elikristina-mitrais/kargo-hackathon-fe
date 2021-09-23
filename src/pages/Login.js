import React, { useState } from 'react';
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
    apiUrl = `${process.env.REACT_APP_SERVER_URL}/auth`;
      setError(null);
      setLoading(true);
      axios.post(apiUrl, { username: username.value, password:password.value}).then(response => {
          setLoading(false);

          if (response.data.error === 1) {
            setError(response.data.error_msg);
          } else {
            setUserSession(response.data.data.users.token, response.data.data.users.username, response.data.data.users.role);
            props.history.push('/dashboard');
          }
      }).catch(error => {
          setError("Something went wrong");
      });
    
  }

  return (
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
          <input type="radio" id="transporter" name="role" value="transporter" />
          <label for="transporter">transporter</label><br/>
          <input type="radio" id="shipper" name="role" value="shipper" />
          <label for="shipper">shipper</label>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
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