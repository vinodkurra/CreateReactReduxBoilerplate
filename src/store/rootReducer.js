import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import {reducer as toastrReducer} from 'react-redux-toastr'
import commonReducer from '../services/common/reducer';
import userReducer from "../services/user/reducer"

 
const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
    toastr: toastrReducer,
    commonReducer :   commonReducer,
    userReducer : userReducer
 });
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;



