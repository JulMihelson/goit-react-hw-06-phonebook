import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/pbSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleOnSubmitAdd = () => {
    const alreadyAddedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alreadyAddedContact) {
      alert(`Contact with name ${name} already exists in the phonebook.`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
  };

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleOnSubmitAdd();
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Phonebook</div>
      <label>
        Name
        <input
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\d{1,3}?[-.\s]?\d{1,4}?[-.\s]?\d{1,4}?[-.\s]?\d{1,9}?"
          title="Phone number must be digits and can contain spaces, dashes, dots and parentheses. For example: +1 555-555-5555"
          required
          value={number}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
