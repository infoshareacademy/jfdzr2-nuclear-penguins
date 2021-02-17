import './login.css';
import {NavLink, withRouter} from 'react-router-dom';
import React, {useCallback} from 'react';
import app from './Firebase';
// import iconEmail from '../../assets/iconEmail.png';

function Signup({history}) {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/bartable');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <main>
      <article className="main-container box">
        <div className="app-name-mobile">My Task Bar</div>
        <div className="app-name">My Task Bar</div>
        <div className="log-in-form">
          <div className="login-panel">
            <form onSubmit={handleSignUp} action="#">
              <p>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  className="input-design"
                />
              </p>
              <p>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  className="input-design"
                />
              </p>
              <input
                type="submit"
                name="submit"
                value="Sign Up"
                className="login-button"
              />
            </form>
            <div className="flex-div">
              <div className="sign-up">
                <p id="sign-up-option">
                  Already have an account?
                  <NavLink to={'/login'}> Log in</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default withRouter(Signup);
