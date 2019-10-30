import AppReducer from './AppReducer';
import ImageReducer from "./ImageReducer";
import { combineReducers } from "redux";

const index = combineReducers(
    {
        appData: AppReducer,
        activeImage: ImageReducer,
    }
);

export default index
