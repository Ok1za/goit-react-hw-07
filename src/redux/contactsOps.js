import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://662d505fa7dda1fa378a5983.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
});

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post(BASE_URL, contactData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`${BASE_URL}/${contactId}`);
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);