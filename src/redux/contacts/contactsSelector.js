import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactsById = (state, contactId) => {
  const contacts = getContacts(state);

  return contacts.find(item => item.id === contactId);
};

export default {
  getContacts,
  getLoading,
  getVisibleContacts,
  getFilter,
  getContactsById,
};
