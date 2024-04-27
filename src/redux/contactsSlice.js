import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contact",
    initialState: { items: [] },
    reducers: {
        addContact(state, action) {
            state.items = [...state.items, action.payload];
        },
        deleteContact(state, action) {
            const contactIndex = state.items.findIndex(
                (contacts) => contacts.id === action.payload
            );
            state.items.splice(contactIndex, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;