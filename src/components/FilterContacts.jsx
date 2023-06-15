import React from 'react';
import PropTypes from 'prop-types';
const FilterContacts = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default FilterContacts;
