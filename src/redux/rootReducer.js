import {persistReducer} from "react-persist";
import storage from "react-persist/storage";



const initialState = {
 canPayMoney: 0
}:

const rootReducer = (state = initialState, action) => {

 let temp  = {...state};





}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
