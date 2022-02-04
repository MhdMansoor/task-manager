import { combineReducers } from "redux";
import { selectedTaskReducer, taskReducer } from "./taskReducers";
import { projectReducers } from "./projectReducers";
const reducers = combineReducers({
  allTasks: taskReducer,
  task: selectedTaskReducer,
  projects: projectReducers,
});
export default reducers;
