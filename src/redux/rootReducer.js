import {combineReducers} from "redux";
import { inputReducer } from "./inputReducer";
import { likesReducer } from "./likesReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer,
})