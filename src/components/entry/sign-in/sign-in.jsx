import useFormWithValidation from '../../../hooks/useFormWithValidation';
import Entry from '../entry';
import Input from '../../ui/input/input';
import { loginUser } from '../../../utils/api';

function SignIn() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

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
