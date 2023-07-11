import { Link } from 'react-router-dom';
import useFormWithValidation from '../../../hooks/useFormWithValidation';
import Entry from '../entry';
import Input from '../../ui/input/input';
import { ROUTES } from '../../../utils/constants';
import { registerUser } from '../../../utils/api';

function SignUp() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const nav = (
    <>
      <span>Уже зарегистрированы?</span> <Link to={ROUTES.sign.in}>Войти</Link>
    </>
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const success = await registerUser(values);

      localStorage.setItem('token', success.token);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <Entry
      nav={nav}
      heading="Регистрация"
      buttonText="Зарегистрироваться"
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <Input
        label="Имя"
        htmlType="text"
        name="name"
        placeholder="Артур"
        minLength="2"
        maxLength="50"
        value={values?.name || ''}
        error={errors?.name}
        onChange={handleChange}
      />
      <Input
        label="Электронная почта"
        htmlType="email"
        name="email"
        placeholder="example@mail.ru"
        autoComplete="on"
        value={values?.email || ''}
        error={errors?.email}
        onChange={handleChange}
      />
      <Input
        label="Пароль"
        htmlType="password"
        name="password"
        placeholder="******"
        autoComplete="on"
        hasIconHiding
        value={values?.password || ''}
        error={errors?.password}
        onChange={handleChange}
      />
      <Input
        label="Подтвердите пароль"
        htmlType="password"
        name="passwordConfirmation"
        placeholder="******"
        autoComplete="on"
        hasIconHiding
        value={values?.passwordConfirmation || ''}
        error={errors?.passwordConfirmation}
        onChange={handleChange}
      />
    </Entry>
  );
}

export default SignUp;
