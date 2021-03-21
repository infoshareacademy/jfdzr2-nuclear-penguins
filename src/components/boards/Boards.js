import '../shared.css';
import {TableChanger} from '../tables/TableChanger';
import './boards.css';

import {Navigation} from '../navigation/Navigation';
import {Task} from '../notes/Notes';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DropPlace} from '../notes/DropPlace';

export const Boards = () => {
  return (
    <>
      <Navigation />
      <TableChanger />
      <DndProvider backend={HTML5Backend}>
        <div className="workBoards">
          <div className="toDo board">
            <h1>To do</h1> <span className="addNote">+</span>
          </div>
          <div className="inProgress board">
            <h1>In progress</h1>
            <div>Move me please</div>
            <Task text="Write the docs" />
          </div>
          <div className="done board">
            <h1>Done</h1>
            <DropPlace>
              <Task text="hej" />
            </DropPlace>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default Boards;
