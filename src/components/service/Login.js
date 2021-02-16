import '../service/login.css';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import React, {useCallback, useContext} from 'react';
import app from './Firebase';
import {AuthContext} from './Auth';
import iconEmail from '../../assets/iconEmail.png';

export const Login = ({history}) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/bartable');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const currentUser = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/bartable" />;
  }

  return (
    <main>
      <article className="main-container box">
        <div className="app-name-mobile">My Task Bar</div>
        <div className="app-name">My Task Bar</div>
        <div className="log-in-form">
          <div className="login-panel">
            <form onSubmit={handleLogin} action="#">
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
                value="Log In"
                className="login-button"
              />
            </form>
            <div className="flex-div">
              <div className="sign-up">
                <p id="sign-up-option">
                  Don't have an account?
                  <NavLink to={'/signup'}>Sign up</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" id="container">
          <div className="footer-list">
            <span className="contact">
              <img src={iconEmail} alt="envelope icon" className="envelope" />
              Maja.Radek.Lukasz.Aga@gmail.com
            </span>
            <span className="authors">© 2021 My Task Bar</span>
            <span className="freepik">
              {' '}
              <a href="http://www.freepik.com" className="freepik">
                Background photo designed by rawpixel.com / Freepik
              </a>
            </span>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default withRouter(Login);
