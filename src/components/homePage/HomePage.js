import '../homePage/homepage.css';
import '../shared.css';

import {NavLink} from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <nav className="navigation">
        <h1 className="logo">My Task Bar</h1>
        <ul className="menu">
          <NavLink className="link-nav" to={'/login'}>
            Login
          </NavLink>
          <NavLink className="link-register" to={'/signup'}>
            Register
          </NavLink>
        </ul>
      </nav>
      <div className="welcome">
        <h2 className="title">
          Witaj na stronie <span className="title-2"> My Task Bar!</span>{' '}
        </h2>
        <p className="introduction">
          Pomożemy Ci w w organizacji codziennej pracy. Wyznacz swoje cele,
          podziel pracę na zadania, poczuj smak satysfakcji z ukończonych zadań.
        </p>
      </div>

      <div className="chocolate-row1">
        <p className="p1">
          My Task Bar to wirtualna tablica, którą wypełnisz swoimi zadaniami i
          notatkami.
        </p>
        <p className="p2">
          Aplikacja pomoże Ci zorganizować zarówno pracę zawodową, dom jak i
          życie osobiste.
        </p>
        <p className="p3">
          My Task Bar pozwoli Ci na efektywne zarządzanie czasem oraz pomoże Ci
          łatwiej osiągnąć założone cele.
        </p>
      </div>
      <div className="chocolate-row2">
        <p className="p1">
          Przejrzystośc - wystarczy jeden rzut okiem, by wiedzieć na jakim
          etapie realizacji jest Twój task.
        </p>
        <p className="p2">
          Narzędzie jest proste i intuicyjne w użyciu. Zmiana statusów nastepuje
          za pomocą funkcji Drag&Drop.
        </p>
        <p className="p3 last-bar">
          My Task Bar kojarzy Ci się z czekoladą? Świetnie! Niech każdy
          ukończony task przyniesie Ci słodki smak satysfakcji!
        </p>
      </div>

      <div className="footer-space"></div>
    </div>
  );
};

export default HomePage;
