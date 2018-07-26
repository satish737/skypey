import user from "./user";
import contacts from "./contacts";
import { combineReducers } from "redux";
import activeUserId from "./activeUserId";
import chat from "./chat";
import typing from "./typing";

export default combineReducers({
    user,
    contacts,
    activeUserId,
    chat,
    typing
  });