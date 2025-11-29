import React from 'react';
import './FormField.css';

interface FormFieldProps {
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string; // "text", "email", "tel", etc.
  placeholder?: string;
  error?: string;
  textarea?: boolean; // use <textarea> instead of <input>
  rows?: number; // number of rows for textarea
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error,
  textarea = false,
  rows = 4,
  className = '',
}) => {
  return (
    <div className={`form-field ${className}`}>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormField;
