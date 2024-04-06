import ContactsItem from 'components/ContactsItem';
import { StyledList } from './ContactsList.styled';

function ContactsList({ contacts, filter, deleteContact }) {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          cbOnClick={deleteContact}
        />
      ))}
    </StyledList>
  );
}

export default ContactsList;
