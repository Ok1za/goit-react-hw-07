import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'

const ContactList = () => {
    const selectContacts = useSelector((state) => state.contacts.items);
    const selectNameFilter = useSelector((state) => state.filters.name);

    const filteredContacts = useMemo(
        () =>
            selectContacts.filter((contact) => {
                return contact.name
                    .toLowerCase()
                    .includes(selectNameFilter.toLowerCase());
            }),
        [selectNameFilter, selectContacts]
    );

    return (
        <ul className={styles.contactList}>
            {Array.isArray(filteredContacts) &&
                filteredContacts.map((contact) => {
                return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
    );
};

export default ContactList;
