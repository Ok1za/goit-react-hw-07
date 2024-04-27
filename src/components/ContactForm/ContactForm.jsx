import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const formInitial = { name: "", number: "" };

const schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const onAddContact = (values, actions) => {
        const finalContact = {
            ...values,
            id: nanoid(),
        };
        dispatch(addContact(finalContact));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={formInitial}
            validationSchema={schema}
            onSubmit={onAddContact}
        >
            <Form className={styles.contactForm}>
                <label className={styles.contactFormLabel} htmlFor="name">
                    Name
                    <Field
                        className={styles.contactFormInput}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                    />
                    <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                </label>
                <label className={styles.contactFormLabel} htmlFor="number">
                    Number
                    <Field
                        className={styles.contactFormInput}
                        type="tel"
                        name="number"
                    />
                    <ErrorMessage name="number" component="div" className={styles.errorMessage} />
                </label>
                <button className={styles.contactFormButton} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;