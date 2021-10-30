import { ActionType } from "../types";
const initialState  = 0 

const mathreducer = (state = initialState , action) =>
{
    switch(action.type){
    case ActionType.Increment :
        return action.payload + 1;
        default : 
        return state
    }
}

export default mathreducer;