import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Daniel Otieno",
        email: "da@gmail.com",
        phone: "123-345-678",
        type: "personal"
      },
      {
        id: 2,
        name: "Ritah Wekesa",
        email: "ri@gmail.com",
        phone: "145-345-678",
        type: "professional"
      },
      {
        id: 3,
        name: "Moses Onyi",
        email: "onyi@gmail.com",
        phone: "123-678-678",
        type: "personal"
      },
      {
        id: 4,
        name: "Ann Mburu",
        email: "ann@gmail.com",
        phone: "123-123-678",
        type: "personal"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD CONTACT
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // DELETE CONTACT
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // UPDATE CONTACT

  // FILTER CONTACTS

  // CLEAR FILTER

  // SET CURRECT CONTACT
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // CLEAR CURRENT CONTACT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
