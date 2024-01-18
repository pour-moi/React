function LabeledInput({ id, label, value, setValue }) {
  return (
    <div className={id}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
