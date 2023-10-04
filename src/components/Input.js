export function Input({ name, placeholder, onChange, value, id }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        id={id}
      />
      <br />
    </>
  );
}
