import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import { REGEX_FIRST_NAME, REGEX_EMAIL, REGEX_PASSWORD } from '../utils/regex';

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const location = useLocation();
  const isRouteSignUp = location.pathname === ROUTES.sign.up;
  const isRouteSignIn = location.pathname === ROUTES.sign.in;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (isRouteSignUp) {
      setValues({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      });

      setErrors({
        name: false,
        email: false,
        password: false,
        passwordConfirmation: false,
      });
    }

    if (isRouteSignIn) {
      setValues({ email: '', password: '' });

      setErrors({
        name: false,
        email: false,
      });
    }
  }, []);

  useEffect(() => {
    if (isRouteSignUp) {
      setErrors({
        name: REGEX_FIRST_NAME.test(values.name),
        email: REGEX_EMAIL.test(values.email),
        password:
          REGEX_PASSWORD.test(values.password) &&
          values.password === values.passwordConfirmation,
        passwordConfirmation:
          REGEX_PASSWORD.test(values.passwordConfirmation) &&
          values.password === values.passwordConfirmation,
      });
    }

    if (isRouteSignIn) {
      setErrors({
        email: REGEX_EMAIL.test(values.email),
        password: REGEX_PASSWORD.test(values.password),
      });
    }
  }, [values]);

  useEffect(() => {
    setIsValid(Object.values(errors).every((value) => value === true));
  }, [errors]);

  return {
    values,
    errors,
    isValid,
    handleChange,
  };
}
