import { CreateContact} from 'components/Form/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList} from 'components/ContactList/ContactsList';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { contactsSelect, getError, getIsLoading } from 'redux/selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader'; 

export function App() {
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const contactsAdd = useSelector(contactsSelect);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        theme="colored" 
       />
    </div>
  );
};

