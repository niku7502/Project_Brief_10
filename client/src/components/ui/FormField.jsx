import './ui.css';

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  children,
  ...rest
}) {
  const className = `input-field ${error ? 'input-error' : ''}`;

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span className="required"> *</span>}
      </label>

      {type === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} className={className}>
          {children}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className={className}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          {...rest}
        />
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FormField;