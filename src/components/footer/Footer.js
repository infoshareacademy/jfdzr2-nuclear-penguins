import './Footer.css';
import iconEmail from '../../assets/iconEmail.png';

import {useRouteMatch} from 'react-router-dom';

export const Footer = () => {
  return (
    <>
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
    </>
  );
  // }
};

export default Footer;
