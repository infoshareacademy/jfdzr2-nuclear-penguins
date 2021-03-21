import '../boards/boards.css';
import '../shared.css';
import {NavLink} from 'react-router-dom';
export const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <h1 className="logo">My Task Bar</h1>
        <ul className="menu">
          <li className="add">
            <NavLink className="tableAddingBtn" to={'/bartable/tableAdder'}>
              +
            </NavLink>
          </li>
          <li className="boards">Tablice</li>
          <li className="popUp">Powiadomienia</li>
          <li className="account">Moje konto</li>
        </ul>
      </nav>
      <div className="footer-space-nav"></div>
    </>
  );
};
