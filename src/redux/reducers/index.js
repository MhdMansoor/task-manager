import { combineReducers } from "redux";
import { selectedTaskReducer, taskReducer } from "./taskReducers";

const reducers = combineReducers({
  allTasks: taskReducer,
  task: selectedTaskReducer,
});
export default reducers;
