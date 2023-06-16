import React from 'react';

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

export default DeleteContacts;
