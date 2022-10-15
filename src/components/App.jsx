import { useState } from 'react';
import ContactForm from './contactForm/contactForm';
import FindContact from './findContact/findContact';
import ContactList from './contactList/contactList';

// ----------- CSS ----------- //
import { MainContainer, Title } from './App.styled';

export const App = () => {
  const [filter, setFilter] = useState('');

  // const filterNormalizes = filter.toLowerCase();

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterNormalizes)
  // );

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <FindContact filter={filter} onChange={setFilter} />
      <ContactList />
    </MainContainer>
  );
};
