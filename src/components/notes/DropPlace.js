import {ItemTypes} from './Constants';
import {useDrop} from 'react-dnd';

function getStyle(backgroundColor) {
  return {
    backgroundColor,
    textAlign: 'left',
    float: 'left',
    fontSize: '1rem',
    width: '100%',
    height: '50vh',
    borderRadius: '3px',
  };
}

export const DropPlace = ({children, onDrop}) => {
  const [{isOver, isOverCurrent}, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      hover(item, monitor) {
        console.log(item, monitor.getItem().index);
      },
      drop(item, monitor) {
        console.log(monitor.getDropResult());
        onDrop(item);
        const didDrop = monitor.didDrop();
        if (didDrop) {
          return;
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({shallow: true}),
      }),
    }),
    []
  );
  let backgroundColor = 'rgba(0, 0, 0, 0)';
  if (isOverCurrent || isOver) {
    backgroundColor = 'rgb(254, 213, 195';
  }
  return (
    <div ref={drop} style={getStyle(backgroundColor)}>
      <br />
      <div>{children}</div>
    </div>
  );
};
