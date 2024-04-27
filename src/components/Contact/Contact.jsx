import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const onDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };
    return (
        <div className={styles.contactContainer}>
                <span className={styles.contactName}> {contact.name}</span>
                <span className={styles.Number}> {contact.number}</span>
            <button
                className={styles.deleteButton}
                type="button"
                onClick={() => onDeleteContact(contact.id)}>
                Delete
            </button>
        </div>
    );
};

export default Contact;