import "./bar.css";
import "../shared.css";

export const Bartable = () => {
  return (
    <>
      <nav className="navigation">
        <h1 className="logo">My Task Bar</h1>
        <ul className="menu">
          <li className="add">+</li>
          <li className="boards">Tablice</li>
          <li className="popUp">Powiadomienia</li>
          <li className="account">Moje konto</li>
        </ul>
      </nav>
    </>
  );
};

export default Bartable;
