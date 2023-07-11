import { Link } from 'react-router-dom';
import useFormWithValidation from '../../../hooks/useFormWithValidation';
import Entry from '../entry';
import Input from '../../ui/input/input';
import { ROUTES } from '../../../utils/constants';
import { loginUser } from '../../../utils/api';

function SignIn() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const nav = (
    <>
      <span>Вы новый пользователь?</span>{' '}
      <Link to={ROUTES.sign.up}>Зарегистрироваться</Link>
    </>
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const success = await loginUser(values);

      localStorage.setItem('token', success.token);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <Entry
      nav={nav}
      heading="Вход"
      buttonText="Войти"
      isValid={isValid}
      onSubmit={handleSubmit}
    >
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
    </Entry>
  );
}

export default SignIn;
