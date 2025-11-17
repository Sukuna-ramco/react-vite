import React from 'react';
import './TextBox.css';

interface TextBoxProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  className = '',
  error = '',
}) => {
  return (
    <div className={`textbox ${className}`}>
      {label && (
        <label className="textbox-label">
          {label} {required ? <span className="textbox-required">*</span> : null}
        </label>
      )}
      <input
        className={`textbox-input ${error ? 'textbox-input--error' : ''}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className="textbox-error">{error}</div>}
    </div>
  );
};

export default TextBox;