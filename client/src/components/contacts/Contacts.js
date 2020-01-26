import React, { useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a Contact</h4>;
  }
  return (
    <>
      {(contacts !== null) & !loading ? (
        filtered !== null ? (
          filtered.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        ) : (
          contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Contacts;
