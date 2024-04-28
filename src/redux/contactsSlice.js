import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectFilteredContacts } from './selectors';

const initialState = {
    items: [],
    loading: false,
    filter: "",
    error: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
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
            .addCase(deleteContact.fulfilled, (state) => {
                state.loading = false;
                state.items = selectFilteredContacts(state, {
                    ...state,
                    filter: state.filter,
                });
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;