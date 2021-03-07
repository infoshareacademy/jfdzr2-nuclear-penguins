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
          To do <span className="addNote">+</span>
        </div>
        <div className="inProgress board">In progress</div>
        <div className="done board">Done</div>
      </div>
    </>
  );
};

export default Boards;
