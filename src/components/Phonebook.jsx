import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };
  const handleOnSubmitAdd = ({ name, number }) => {
    const alreadyAddedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alreadyAddedContact) {
      alert(`Contact with name ${name} already exists in the phonebook.`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { name, number, id: nanoid() },
    ]);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
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
