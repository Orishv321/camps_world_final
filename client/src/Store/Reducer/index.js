import { combineReducers } from "redux";
import Contactreducer from "./ContactReducer";
import AdminisionReducer from "./AdminisionReducer";
import AuthenticationReducer from "./AuthenticationReducer";
export default combineReducers({
  Contactreducer,
  AdminisionReducer,
  AuthenticationReducer,
});
