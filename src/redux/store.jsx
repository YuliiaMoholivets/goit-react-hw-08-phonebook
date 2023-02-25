import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from 'redux/contacts.slice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});