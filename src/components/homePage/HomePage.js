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
            Zaloguj
          </NavLink>
          <NavLink className="link-register" to={'/signup'}>
            Zarejestruj się
          </NavLink>
        </ul>
      </nav>
      <div className="welcome">
        <h2 className="title">
          Witaj na stronie <span className="title-2"> My Task Bar!</span>{' '}
        </h2>
        <div className="introduction">
          <p className="paragraph--introduction">
            Pomożemy Ci w organizacji codziennej pracy. Wyznacz swoje cele,
            podziel pracę na zadania, poczuj smak satysfakcji z ukończonych
            zadań.
          </p>
        </div>
      </div>

      <div className="square-container">
        <div className="home--square--row">
          <div className="home--div--square">
            <p className="home--paragraph">
              My Task Bar to wirtualna tablica, którą wypełnisz swoimi zadaniami
              i notatkami.
            </p>
          </div>
          <div className="home--div--square">
            <p className="home--paragraph">
              Aplikacja pomoże Ci zorganizować zarówno pracę zawodową, dom jak i
              życie osobiste.
            </p>
          </div>
          <div className="home--div--square">
            <p className="home--paragraph">
              My Task Bar pozwoli Ci na efektywne zarządzanie czasem oraz pomoże
              Ci łatwiej osiągnąć założone cele.
            </p>
          </div>
        </div>
        <div className="home--square--row">
          <div className="home--div--square">
            <p className="home--paragraph">
              Przejrzystość - wystarczy jeden rzut okiem, by wiedzieć na jakim
              etapie realizacji jest Twój task.
            </p>
          </div>
          <div className="home--div--square">
            <p className="home--paragraph">
              Narzędzie jest proste i intuicyjne w użyciu. Zmiana statusu
              następuje za pomocą funkcji Drag&Drop.
            </p>
          </div>

          <div className="home--div--square home--last--square">
            <p className="home--paragraph">
              My Task Bar jest jak tabliczka czekolady. Każdy ukończony task
              przyniesie Ci słodki smak satysfakcji!
            </p>
          </div>
        </div>

        <div className="footer-space"></div>
      </div>
    </div>
  );
};

export default HomePage;
