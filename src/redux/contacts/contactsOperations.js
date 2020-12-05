import axios from 'axios';
import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import contactsActions from './contactsActions';

const addContact = ({ name, number }) => (dispatch, getState) => {
  if (name === '' || number === '') {
    error({ text: 'Please, enter name or number', delay: 2500 });
  }

  const { contacts } = getState();

  const names = contacts.items.map(contact => contact.name.toLowerCase());

  const isExistingContact = names.includes(name);

  if (isExistingContact) {
    alert({ text: `${name} is alredy in contacts`, delay: 2500 });
    return;
  }

  dispatch(contactsActions.addContactRequest());

  if (!isExistingContact) {
    axios
      .post('/contacts', { name, number })
      .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
      .catch(error => dispatch(contactsActions.addContactError(error.massage)));
  }
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(error =>
      dispatch(contactsActions.fetchContactsError(error.massage)),
    );
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error =>
      dispatch(contactsActions.removeContactError(error.massage)),
    );
};

export default { addContact, fetchContacts, removeContact };
