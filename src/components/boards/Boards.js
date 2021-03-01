import '../shared.css';
import {TableChanger} from './TableChanger';
import './boards.css';

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
      <TableChanger />
      <div className="workBoards">
        <div className="toDo board">
          To do <span className="addNote">+</span>
        </div>
        <div className="inProgress board">In progress</div>
        <div className="done board">Done</div>
      </div>
    </>
  );
};

export default Boards;
