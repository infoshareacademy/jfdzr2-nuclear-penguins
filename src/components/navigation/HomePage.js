import "../navigation/homepage.css";
import "../shared.css";

import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <nav className="navigation">
        <h1 className="logo">My Task Bar</h1>
        <ul className="menu">
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </ul>
      </nav>
      <div className="welcome">
        <h2 className="title">Witaj na stronie My Task Bar! </h2>
        <p>
          Pomożemy Ci w w organizacji codziennej pracy. Wyznacz swoje cele,
          podziel pracę na zadania, poczuj satysfakcję z ukończonych zadań.
        </p>
      </div>
    </>
  );
};

export default HomePage;
