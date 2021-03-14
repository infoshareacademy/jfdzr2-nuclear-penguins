import '../shared.css';
import {TableChanger} from '../tables/TableChanger';
import './boards.css';

import {Navigation} from '../navigation/Navigation';

export const Boards = () => {
  return (
    <>
      <Navigation />
      <TableChanger />
      <div className="workBoards">
        <div className="toDo board">
          <h1>To do</h1> <span className="addNote">+</span>
        </div>
        <div className="inProgress board">
          <h1>In progress</h1>
          <div>Move me please</div>
        </div>
        <div className="done board">
          <h1>Done</h1>
        </div>
      </div>
    </>
  );
};

export default Boards;
