import "./SimpleNavigation.css";
import "./shared.css";

export const SimpleNavigation = () => {
  return (
    <>
      <nav className="navigation">
        <h1 className="logo">My Task Bar</h1>
        <ul className="menu">
          <li className="login">Logowanie</li>
          <li className="register">Rejestracja</li>
        </ul>
      </nav>
      <div className="welcome">
        <h2 className="title">Witaj na stronie My Task Bar! </h2>
        <p>Pomożemy Ci w w organizacji codziennej pracy. Wyznacz swoje cele, podziel pracę na zadania, poczuj satysfakcję z ukończonych zadań.</p>
      </div>

    </>
  );
};
