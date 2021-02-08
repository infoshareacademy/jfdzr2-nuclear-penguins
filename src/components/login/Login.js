
import "./Login.css";


function Login() {
  return (
        
      <main> 
      <article    className="grid-container box">
   
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
                  <a id="sign-up-option-2" href="link">Sign up</a>
                </p>
              </div>
            </div>
          </div>
      
        </div>
    
        <footer className="footer" id="container">
          <div className="footer-list">
            <nav className="footer-nav">
              {/* <ul className="footer-ul">
                <li className="li-kzy1">ABOUT</li>
                <li className="li-kzy1">HELP</li>
                <li className="li-kzy1">PRESS</li>
                <li className="li-kzy3">DEVELOPERS</li>
                <li className="li-kzy1">API</li>
                <li className="li-kzy2">PRIVACY</li>
                <li className="li-kzy1">TERMS</li>
                <li className="li-kzy2 locations">LOCATIONS</li>
            
              </ul> */}
            </nav>
            <span className="authors">© 2021 My Task Bar from Maja, Łukasz, Radek & Aga</span>
           <span className="freepik"> <a href="http://www.freepik.com" className="freepik">Background photo designed by rawpixel.com / Freepik</a></span>
          </div>
        </footer>
        </article>
      </main>
     



  );
}

export default Login;