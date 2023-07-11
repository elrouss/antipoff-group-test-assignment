import PropTypes from 'prop-types';
import styles from './input.module.scss';

function Input({
  label,
  htmlType,
  name,
  placeholder,
  minLength,
  maxLength,
  autoComplete = 'off',
  disabled = false,
  hasIconHiding = false,
  required = true,
  value,
  error,
  onChange,
}) {

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={htmlType}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
      />
      {/* {hasIconHiding && <button className={styles.eye} type="button" />} */}
      {error && <span className={styles.error}>Ошибка</span>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  htmlType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  hasIconHiding: PropTypes.bool,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: undefined,
  placeholder: undefined,
  minLength: undefined,
  maxLength: undefined,
  autoComplete: 'off',
  disabled: false,
  required: true,
  hasIconHiding: false,
  error: undefined,
};

export default Input;
