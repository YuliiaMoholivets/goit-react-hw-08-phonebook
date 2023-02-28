
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addContacts } from "redux/contacts/operations"; 
import styles from 'components/Form/ContactForm.module.css';
import { contactsSelect } from "redux/contacts/selector"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  export const CreateContact = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contactsAdd = useSelector(contactsSelect);
    const dispatch = useDispatch();
    const handleChange = e => {
      const { name, value } = e.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default: {
          return;
        }
      }
    };
    const handleSubmit = e => {
      e.preventDefault();
      const newContact = contactsAdd.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
      );

    if (newContact) {
       toast.warning(`${name} of ${number} is already in contacts.`);
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
    
   
    };
    
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.label}>Phonebook</h3>
        <input
          className={styles.input}
          text="text"
          name="name"
          placeholder="Enter name of contact"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          className={styles.input}
          placeholder="Enter contact number "
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  };
