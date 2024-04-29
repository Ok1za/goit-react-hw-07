import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsOps';

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    const dispatch = useDispatch();

    const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
    }

    return (
        <ul className={styles.contactList}>
            {filteredContacts.map(contact => {
                return (
                    <Contact 
                        key={contact.id} 
                        contact={contact} 
                        onDeleteContact={onDeleteContact} 
                    />
                );
            })}
        </ul>
    );
};

export default ContactList;
