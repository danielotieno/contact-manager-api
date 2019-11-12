import React, { useReducer } from 'react'
import uuid from 'uuid'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [{
        id: 1,
        name: 'Daniel Otieno',
        email: 'da@gmail.com',
        phone: '123-345-678',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Ritah Wekesa',
        email: 'ri@gmail.com',
        phone: '145-345-678',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Moses Onyi',
        email: 'onyi@gmail.com',
        phone: '123-678-678',
        type: 'personal'
      },
      {
        id: 4,
        name: 'Ann Mburu',
        email: 'ann@gmail.com',
        phone: '123-123-678',
        type: 'personal'
      }
    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // ADD CONTACT

  // DELETE CONTACT

  // UPDATE CONTACT

  // FILTER CONTACTS

  // CLEAR FILTER

  // SET CURRECT CONTACT

  // CLEAR CURRENT CONTACT

  return(
    <contactContext.Provider value={{ contacts: state.contacts}}>
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState