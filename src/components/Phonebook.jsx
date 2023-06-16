import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, applyFilter, deleteContact } from '../redux/pbSlice';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(applyFilter(value));
  };

  const handleOnSubmitAdd = ({ name, number }) => {
    const alreadyAddedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alreadyAddedContact) {
      alert(`Contact with name ${name} already exists in the phonebook.`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ContactForm onSubmit={handleOnSubmitAdd} />
      <FilterContacts onChange={handleChange} />
      <ContactList
        contacts={contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Phonebook;
