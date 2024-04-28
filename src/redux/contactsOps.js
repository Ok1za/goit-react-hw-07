import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://662d505fa7dda1fa378a5983.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post(apiUrl, contactData);
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
            await axios.delete(`${apiUrl}/${contactId}`);
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);