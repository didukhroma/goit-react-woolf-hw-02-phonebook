import Button from 'components/Button';
import FormInput from 'components/FromInput';

import { StyledForm } from './From.styled';

const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const patternNumber =
  '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}';

function Form({ cbOnSubmit, cbOnChange, text, number }) {
  return (
    <StyledForm onSubmit={cbOnSubmit}>
      <FormInput
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern={patternName}
        text={text}
        cbOnChange={cbOnChange}
      />
      <FormInput
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        pattern={patternNumber}
        text={number}
        cbOnChange={cbOnChange}
      />

      <Button title="Add contact" />
    </StyledForm>
  );
}

export default Form;
