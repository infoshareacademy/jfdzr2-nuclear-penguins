import {ItemTypes} from './Constants';
import {useDrop} from 'react-dnd';
import {useState} from 'react';

function getStyle(backgroundColor) {
  return {
    color: 'white',
    backgroundColor,
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
    padding: '5px 20px 5px 20px',
    width: '100%',
    minHeight: '75vh',
  };
}

export const DropPlace = ({greedy, children}) => {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const [{isOver, isOverCurrent}, drop] = useDrop(
    () => ({
      accept: ItemTypes.TASK,
      drop(item, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop && !greedy) {
          return;
        }
        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({shallow: true}),
      }),
    }),
    [greedy, setHasDropped, setHasDroppedOnChild]
  );
  const text = greedy ? 'greedy' : 'not greedy';
  let backgroundColor = 'rgba(0, 0, 0, .5)';
  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'darkgreen';
  }
  return (
    <div ref={drop} style={getStyle(backgroundColor)}>
      {text}
      <br />
      {hasDropped && <span> {hasDroppedOnChild && ' on child'}</span>}
      <div>{children}</div>
    </div>
  );
};
