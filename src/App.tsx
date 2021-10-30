import React , {useState} from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IncrementCount } from './redux/actions/actions';


function App() {

  //REACT COUNTER STATE LOGIC
const[counter,setcounter] =  useState(0);
const addCount = (counter: number) => { setcounter(counter+1) }

//REDUX COUNTER DELECTOR & DISPATCH LOGIC 
const dispatch = useDispatch()
const reduxcounts: number = useSelector(
  (state: any) => state.mathreducer
);

  return (

    <div className="App">
    <h1>REACT REDUX DEMO</h1>
    <div>
      <h1> SIMPLE REACT  COUNTER : { counter }</h1>
    <br/>
       <button onClick={() => addCount(counter)} >Add </button>
     <br />   <br />
     <h1> REACT REDUX COUNTER  {reduxcounts} </h1>
     <button onClick={() => dispatch(IncrementCount(reduxcounts))} >AddRedux</button>
    </div>
    </div>
  );
}

export default App;
