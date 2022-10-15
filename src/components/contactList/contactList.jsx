import { ContactListStl } from './contactList.styled';
import ContactListElement from 'components/contactElement/contactElement';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { getFilters } from 'redux/selectors';

const ContactList = () => {
  const { contacts } = useSelector(getContacts);

  const filter = useSelector(getFilters);

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListStl>
      {!filter
        ? contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <ContactListElement id={id} name={name} number={number} />
              </li>
            );
          })
        : visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <ContactListElement id={id} name={name} number={number} />
              </li>
            );
          })}
    </ContactListStl>
  );
};

export default ContactList;
