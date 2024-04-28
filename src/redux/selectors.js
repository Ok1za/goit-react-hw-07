import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = (state) => state.filter;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (!filter) {
            return contacts;
        }
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);