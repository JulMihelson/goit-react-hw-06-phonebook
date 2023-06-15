import React from 'react';
import PropTypes from 'prop-types';
const DeleteContacts = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onDelete={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};
DeleteContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
export default DeleteContacts;
