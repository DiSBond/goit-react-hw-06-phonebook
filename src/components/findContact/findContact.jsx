import { FcContatiner } from './findContact.styled';
import { filterContact } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const FindContact = () => {
  const dispatch = useDispatch();

  const changeFilter = text => {
    dispatch(filterContact(text));
  };

  return (
    <FcContatiner>
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            onChange={e => changeFilter(e.target.value)}
          />
        </label>
      </form>
    </FcContatiner>
  );
};

export default FindContact;
