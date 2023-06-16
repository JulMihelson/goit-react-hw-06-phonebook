import React from 'react';

import { useDispatch } from 'react-redux';
import { applyFilter } from '../redux/pbSlice';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(applyFilter(value));
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

export default FilterContacts;
