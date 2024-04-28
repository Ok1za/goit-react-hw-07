import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://662d505fa7dda1fa378a5983.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const response = await axios.get(apiUrl);
        return response.data;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData) => {
        const response = await axios.post(apiUrl, contactData);
        return response.data;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId) => {
        await axios.delete(`${apiUrl}/${contactId}`);
        return contactId;
    }
);

export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items,
    (state) => state.filter,
    (contacts, filter) => {
        if (!filter) {
            return contacts;
        }
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { items: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(contact => contact.id !== action.payload);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default contactsSlice.reducer;