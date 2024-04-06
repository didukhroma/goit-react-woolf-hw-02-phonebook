function FormInput({ type, name, title, pattern, text, cbOnChange }) {
  return (
    <label>
      <span>{name}</span>
      <input
        name={name}
        type={type}
        title={title}
        value={text}
        onChange={cbOnChange}
        pattern={pattern}
        required
      />
    </label>
  );
}

export default FormInput;
