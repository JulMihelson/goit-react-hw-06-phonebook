import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/pbSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <span>Contacts</span>
      <ul>
        {filterContacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
