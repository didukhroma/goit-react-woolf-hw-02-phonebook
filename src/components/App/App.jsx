import { Component } from 'react';

import generateID from 'helpers/generateID';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Container from 'components/Container';
import { StyledMainTitle, StyledTitle } from './App.styled';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export default class App extends Component {
  state = {
    ...initialState,
  };

  addContact = newContact => {
    const isExist = this.state.contacts.find(el => el.name === newContact.name);

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    newContact.id = generateID();

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: newContacts });
  };

  changeFilter = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value.trim(),
    });
  };

  render() {
    return (
      <Container>
        <StyledMainTitle>Phonebook</StyledMainTitle>
        <ContactForm addContact={this.addContact} />
        <StyledTitle>Contacts</StyledTitle>
        <Filter cbOnChange={this.changeFilter} value={this.state.value} />
        <ContactsList {...this.state} deleteContact={this.deleteContact} />
      </Container>
    );
  }
}
