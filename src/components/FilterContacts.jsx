import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../redux/pbSlice';

const FilterContacts = action => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(applyFilter(value));
  };

  return (
    <div>
      <label>
        Filter contacts by name:
        <input type="text" action={handleChange} />
      </label>
    </div>
  );
};

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterContacts;
