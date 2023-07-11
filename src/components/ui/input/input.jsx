import PropTypes from 'prop-types';
import styles from './input.module.scss';

function Input({
  label,
  htmlType,
  name,
  placeholder,
  autoComplete = 'off',
  disabled = false,
  hasIconHiding = false,
  value,
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
        autoComplete={autoComplete}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {/* {hasIconHiding && <button className={styles.eye} type="button" />} */}
      {/* <span className={styles.error}>Ошибка</span> */}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  htmlType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  disabled: PropTypes.bool,
  hasIconHiding: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: undefined,
  placeholder: undefined,
  autoComplete: 'off',
  disabled: false,
  hasIconHiding: false,
};

export default Input;
