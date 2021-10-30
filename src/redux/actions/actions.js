import { ActionType } from "../types";

export function IncrementCount(counter) {
    return {
      type: ActionType.Increment  ,
      payload: counter,
    };
  }
  