import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import validationMessages from '../../../utils/validation/messages';
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
  error,
  onChange,
}) {
  const [passwordType, setPasswordType] = useState(htmlType);
  const [hasError, setHasError] = useState(true);
  const [isEyeClicked, setIsEyeClicked] = useState(true);

  useEffect(() => {
    if (!name.includes('password')) return;

    if (isEyeClicked) setPasswordType('password');
    if (!isEyeClicked) setPasswordType('text');
  }, [isEyeClicked]);

  const handleEye = () => {
    setIsEyeClicked(!isEyeClicked);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={name.includes('password') ? passwordType : htmlType}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={() => setHasError(error)}
        onBlur={() => setHasError(error)}
      />
      {hasIconHiding && (
        <button
          className={`${styles.eye}${
            (isEyeClicked && ` ${styles.eyeActive}`) || ''
          }`}
          type="button"
          aria-label={isEyeClicked ? 'Показать пароль' : 'Скрыть пароль'}
          onClick={() => handleEye()}
        >
          <svg
            className={(isEyeClicked && styles.eyeActive) || ''}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_233_221)">
              <path
                d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
                stroke="#808185"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 4L20 20"
                stroke="#808185"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_233_221">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
      {!hasError && (
        <span className={styles.error}>{validationMessages[name]}</span>
      )}
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
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: undefined,
  placeholder: undefined,
  autoComplete: 'off',
  disabled: false,
  hasIconHiding: false,
  error: undefined || false,
};

export default Input;
