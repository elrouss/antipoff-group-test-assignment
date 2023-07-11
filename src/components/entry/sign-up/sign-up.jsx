import useFormWithValidation from '../../../hooks/useFormWithValidation';
import Entry from '../entry';
import Input from '../../ui/input/input';

function SignUp() {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Entry
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
