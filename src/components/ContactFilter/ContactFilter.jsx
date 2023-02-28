import { useDispatch, useSelector } from "react-redux"
import styles from 'components/ContactFilter/ContactFilter.module.css';
import { filterSelect } from "redux/contacts/selector";
import { changeFilterAction } from "redux/contacts/contacts.slice";

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterAdd = useSelector(filterSelect);


  return (
    <>
      <h4 className={styles.label}>Find your contact</h4>
      <input  className={styles.input}
        placeholder="Enter contact name"
        onChange={(e) => dispatch(changeFilterAction(e.target.value)) }
        value={filterAdd}
      />
    </>
  );
};

