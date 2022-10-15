import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      {name}: {number}
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default ContactListElement;

ContactListElement.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
