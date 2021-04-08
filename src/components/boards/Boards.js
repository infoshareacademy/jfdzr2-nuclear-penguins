import {TableChanger} from '../tables/TableChanger';
import './boards.css';
import {Navigation} from '../navigation/Navigation';
import {Task} from '../notes/Notes';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DropPlace} from '../notes/DropPlace';
import {useState} from 'react';

export const Boards = () => {
  const [columns, setColumns] = useState({
    todo: [
      {id: 1, text: 'czekolada'},
      {id: 5, text: 'zupa'},
      {id: 6, text: 'kasza'},
    ],
    inProgress: [{id: 2, text: 'ciastko'}],
    done: [{id: 3, text: 'hej'}],
  });

  const updateTask = (toList) => ({task, onList}) => {
    console.log(task, onList, toList);

    setColumns((old) => {
      const from = old[onList].filter((item) => item.id !== task.id);
      const to = old[toList].concat(task);

      if (onList === toList) {
        return {
          ...old,
          [toList]: old[toList]
            .filter((item) => item.id !== task.id)
            .concat(task),
        };
      }
      return {
        ...old,
        [onList]: from,
        [toList]: to,
      };
    });
  };
  return (
    <>
      <Navigation />
      <TableChanger />
      <DndProvider backend={HTML5Backend}>
        <div className="workBoards">
          <div className="toDo board">
            <div className="titleOfBoard">
              <h1>To Do</h1>
              <span className="addNote">+</span>
            </div>
            <DropPlace onDrop={updateTask('todo')}>
              <div>
                {columns.todo.map((task) => (
                  <Task key={task.id} task={task} onList="todo" />
                ))}
              </div>
            </DropPlace>
          </div>
          <div className="inProgress board">
            <h1>In progress</h1>
            <DropPlace onDrop={updateTask('inProgress')}>
              <div>
                {columns.inProgress.map((task) => (
                  <Task key={task.id} task={task} onList="inProgress" />
                ))}
              </div>
            </DropPlace>
          </div>
          <div className="done board">
            <h1>Done</h1>
            <DropPlace onDrop={updateTask('done')}>
              <div>
                {columns.done.map((task) => (
                  <Task key={task.id} task={task} onList="done" />
                ))}
              </div>
            </DropPlace>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default Boards;
