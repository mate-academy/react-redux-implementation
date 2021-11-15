import React from 'react';

import { useDispatch, useSelector } from './react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const decrease = () => dispatch({ type: 'decrement' });
  const increase = () => dispatch({ type: 'increment' });

  return (
    <div className="App">
      <button onClick={decrease}>--</button>
      {count}
      <button onClick={increase}>++</button>
    </div>
  );
}

export default App;
