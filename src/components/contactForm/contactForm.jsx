import { ContactFormSt } from './contactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (contacts.length > 0) {
      const newArray = contacts.filter(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      );

      if (newArray.length > 0) {
        return alert(`${form.elements.name.value} is already in contacts`);
      }
    }

    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <ContactFormSt onSubmit={handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </ContactFormSt>
    </div>
  );
};

export default ContactForm;
