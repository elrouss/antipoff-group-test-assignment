import Entry from '../entry';
import Input from '../../ui/input/input';

function SignUp() {
  return (
    <Entry heading="Регистрация" buttonText="Зарегистрироваться">
      <Input label="Имя" htmlType="text" name="name" placeholder="Артур" />
      <Input
        label="Электронная почта"
        htmlType="email"
        name="email"
        placeholder="example@mail.ru"
        autoComplete="on"
      />
      <Input
        label="Пароль"
        htmlType="password"
        name="password"
        placeholder="******"
        autoComplete="on"
        hasIconHiding
      />
      <Input
        label="Подтвердите пароль"
        htmlType="password"
        name="password-confirmation"
        placeholder="******"
        autoComplete="on"
        hasIconHiding
      />
    </Entry>
  );
}

export default SignUp;
