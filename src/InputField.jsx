export default function InputField({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
