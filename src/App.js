import React, { useEffect } from 'react';
import Basket from './Basket/Basket';
import Tree from './Tree/Tree';
import { useDispatch } from 'react-redux';
import { shake, finishShake } from './AppReducer';
import './App.scss';

function App(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(shake());
    setTimeout(() => dispatch(finishShake()), 3000);
  };

  return (
    <div className="container">
      <div className="App">
        <Tree />
        <Basket />
      </div>
      <button onClick={() => handleClick()} style={{ alignSelf: "center", marginTop: "50px" }}>Shake tree</button>
    </div>
  );
}

export default App;
