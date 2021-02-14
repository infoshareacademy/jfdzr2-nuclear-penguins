import "./Login.css";

function Login() {
  return (
    <main>
      <article className="main-container box">
        <div className="app-name-mobile">My Task Bar</div>
        <div className="app-name">My Task Bar</div>
        <div className="log-in-form">
          <div className="login-panel">
            <form action="#">
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
                  <a id="sign-up-option-2" href="link">
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" id="container">
          <div className="footer-list">
            <span className="authors">
              © 2021 My Task Bar from Maja, Łukasz, Radek & Aga
            </span>
            <span className="freepik">
              {" "}
              <a href="http://www.freepik.com" className="freepik">
                Background photo designed by rawpixel.com / Freepik
              </a>
            </span>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default Login;
