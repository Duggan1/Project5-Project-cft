import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

function SignUp({ handleSignupClick, onLogin }) {
  const [session, setSession] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [age, setAge] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be 6 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    age: yup
      .number()
      .required('Age is required')
      .positive('Age must be a positive number')
      .integer('Age must be an integer'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    validationSchema
      .validate(
        {
          username,
          password,
          email,
          phone,
          age,
        },
        { abortEarly: false }
      )
      .then(() => {
        // form is valid, submit it or do something else
        setFormValid(true);
  
        const user = {
          username: username,
          password: password,
          email: email,
          phone: phone,
          age: age,
        };
  
        fetch('/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        }).then((r) => {
          if (r.ok) {
            r.json().then(console.log('success'));
            setSession(!session);
            onLogin(user);
            navigate('/');
          } else {
            console.log('failure');
          }
        });
      })
      .catch((err) => {
        // form is invalid, set the validation errors
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  
    e.target.reset();
  };
  

  const setSignupState = (e) => {
    handleSignupClick(e);
  };

  return (
    <div>
      <div class="ui center aligned huge header" style={{ margin: 40 }}>
        Welcome to CFT  !
      </div>
      <div className="new-user-form">
        <div class="ui sizer vertical segment">
          <form onSubmit={handleSubmit} class="ui large form" style={{ margin: 40 }}>
            <div class="ui stacked segment">
              <div class="field">
                <div >
                  <i class="user icon"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {errors.username && (
                  <div className="ui pointing red basic label">{errors.username}</div>
                )}
              </div>
              <div class="field">
                <div >
                  <i class="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <div className="ui pointing red basic label">{errors.password}</div>
                )}
              </div>
              <div class="field">
                <div >
                  <i class="envelope icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <div className="ui pointing red basic label">{errors.email}</div>
                )}
              </div>
              <div class="field">
                <div >
                  <i class="phone icon"></i>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {errors.phone && (
                  <div className="ui pointing red basic label">{errors.phone}</div>
                )}
              </div>
              <div >
                <div >
                  <i class="calendar icon"></i>
                  <input
                    type="number"
                    name="age"
                    min="5"
                    // max="99"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                {errors.age && (
                  <div >{errors.age}</div>
                )}
              </div>
              <button type="submit" class="ui fluid large teal submit button">
                Sign up
              </button>
            </div>
          </form>
          <div class="ui message">
            Already have an account?{' '}
            <a href="#" onClick={setSignupState}>
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;