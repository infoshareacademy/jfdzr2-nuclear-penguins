import {useDrag} from 'react-dnd';
import {ItemTypes} from './Constants';

export function Task({isDragging, task, onList}) {
  const [{opacity}, dragRef] = useDrag(
    () => ({
      type: ItemTypes.TASK,
      item: {task, onList},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div
      ref={dragRef}
      style={{
        opacity,
        border: '2px solid #d9c2b3',
        borderRadius: '3px',
        margin: '5px',
        padding: '5px 15px',
      }}
    >
      {task.text}
    </div>
  );
}
