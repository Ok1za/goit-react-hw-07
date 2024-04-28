const contacts = (state = [], action) => {
    switch (action.type) {
        case 'contacts/add':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default contacts;