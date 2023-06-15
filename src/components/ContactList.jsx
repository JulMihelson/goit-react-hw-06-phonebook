import React from 'react';
import PropTypes from 'prop-types';
import DeleteContacts from './DeleteContacts';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <span>Contacts</span>
      <ul>
        {contacts.map(contact => (
          <DeleteContacts
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
