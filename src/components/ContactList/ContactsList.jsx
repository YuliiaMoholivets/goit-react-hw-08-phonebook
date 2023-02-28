import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "redux/contacts/operations"; 
import styles from 'components/ContactList/ContactList.module.css';
import {  contactsSelect, filterSelect } from "redux/contacts/selector";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(filterSelect);
  const contacts = useSelector(contactsSelect);

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
              Delete 
            </button>
        </li>
      ))}
    </ul>
  );
};