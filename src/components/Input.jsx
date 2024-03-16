function Input(props) {
  return (
    <div className="formInput">
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
