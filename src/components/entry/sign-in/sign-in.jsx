import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useFormWithValidation from '../../../hooks/useFormWithValidation';
import Entry from '../entry';
import Input from '../../ui/input/input';
import { ROUTES } from '../../../utils/constants';
import { loginUser } from '../../../services/features/user/api';

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
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
      const success = await dispatch(loginUser(values));

      if (success.payload.token) {
        navigate(location.state?.from?.pathname || ROUTES.ourTeam.main);
      }
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
