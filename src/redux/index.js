import { combineReducers  } from "redux";
import  mathreducer from "./reducers/mathreducer";

const allreducers = combineReducers({
    mathreducer : mathreducer
})

export default allreducers; 

//export type ReducerState = ReturnType<typeof allreducers>