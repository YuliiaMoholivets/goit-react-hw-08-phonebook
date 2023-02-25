import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from 'redux/operations';
import styles from 'components/ContactList/ContactList.module.css';
import {  contactsSelect, filterSelect } from "redux/selector";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(filterSelect);
  const contacts = useSelector(contactsSelect);
 
  console.log(contacts)
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
  
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
    );
   
  };
  
  const visibleContacts = getVisibleContacts();

  return (
    <ul className={styles.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
            <p className={styles.text}>{contact.name}:{contact.number}</p>
            <button className={styles.btn} onClick={() => dispatch(onDeleteContact(contact.id))}>
              Delete contact
            </button>
        </li>
      ))}
    </ul>
  );
};