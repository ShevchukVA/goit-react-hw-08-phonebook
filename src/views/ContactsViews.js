import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import Logo from '../components/logo/Logo';
import Loader from '../components/loader/Loader';
import { contactsOperations, contactsSelector } from '../redux/contacts';
import stylesLogo from '../components/logo/Logo.module.css';
import stylesList from '../components/contactList/ContactList.module.css';
import stylesFilter from '../components/filter/Filter.module.css';

class ContactsViews extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div>
        {this.props.isLoadingContacts && <Loader />}
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={stylesLogo}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>
        <ContactForm />
        <CSSTransition
          in={this.props.isContacts.length > 0}
          timeout={250}
          classNames={stylesFilter}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={this.props.isContacts.length > 0}
          timeout={250}
          classNames={stylesList}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelector.getLoading(state),
  isContacts: contactsSelector.getContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsViews);
