import { CreateContact} from 'components/Form/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList} from 'components/ContactList/ContactsList';
import styles from '../components/App/App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations'; 
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import UseAuth from 'hooks/useAuth';
import { selectUserName } from 'redux/auth/selectors';
import { contactsSelect, getError, getIsLoading } from 'redux/contacts/selector';

const PageContacts = () => {
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const contactsAdd = useSelector(contactsSelect);
  const user = useSelector(selectUserName);
  
  useEffect(() => {
     if (user === null) return;
    dispatch(fetchContacts());
  }, [dispatch, user]);

 useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
 }, [error]);
  
  return (
    <div className={styles.container}>
      <CreateContact />
        {contactsAdd.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <ContactFilter />
          <ContactsList />
        </>
      )} 
        {loading && <Loader />}
   
    </div>
  );
};
const ContactsPage = UseAuth(PageContacts, '/login');
export default ContactsPage;