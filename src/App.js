import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import store, { getPosition } from "./store";
import { actions as positionActions} from './store/position'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { x, y } = useSelector(getPosition);

  const moveUp = () => dispatch(positionActions.up());
  const moveLeft = () => dispatch(positionActions.left());
  const moveRight = () => dispatch(positionActions.right());
  const moveDown = () => dispatch(positionActions.down());
  const rotate = () => {
    dispatch(positionActions.circle(500));
  };

  const coords = `${x}:${y}`;
  const distance = x + y;

  const step = 20;
  const truckStyle = {
    transform: `translate(${x * step}px, ${y * step}px)`,
  };

  return (
    <section>
      <div>
        <div className="group">
          <button onClick={moveUp}>^</button>
        </div>

        <div className="group">
          <button onClick={moveLeft}>{"<"}</button>
          {coords}
          <button onClick={moveRight}>{">"}</button>
        </div>

        <div className="group">
          <button onClick={moveDown}>v</button>
        </div>

        <div className="group">
          <button onClick={rotate}>Rotate</button>
        </div>

        <div className="warehouse">
          <div className="truck" style={truckStyle}>
            {distance}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
