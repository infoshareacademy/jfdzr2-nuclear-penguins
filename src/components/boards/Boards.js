import '../shared.css';

export const Boards = () => {
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
      <div className="workBoards">
        <div className="toDo"></div>
        <div className="inProgress"></div>
        <div className="done"></div>
      </div>
    </>
  );
};

export default Boards;
