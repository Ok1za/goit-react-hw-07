import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    if (!filteredContacts.length) {
        return <p>No contacts to display.</p>;
    }

    return (
        <ul className={styles.contactList}>
            {Array.isArray(filteredContacts) &&
                filteredContacts.map(contact => {
                return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
    );
};

export default ContactList;
