import { createSelector } from '@reduxjs/toolkit';

export const selectNameFilter = (state) => state.contacts.filter;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        if (!filter || typeof filter !== 'string') {
            return contacts;
        }
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);