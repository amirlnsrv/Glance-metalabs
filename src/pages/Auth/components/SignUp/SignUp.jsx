import { useDispatch } from "react-redux";
import styles from "./SignUp.module.scss";
import { useFormStatus, useFormState } from "react-dom";
import { Button } from "common/ui/Button";
import { registerUser } from "api/action";
import { AppContainer } from "layouts/AppContainer";

export const SignUp = ({ setHasAccount }) => {
  const dispatch = useDispatch();
  const [state, formAction] = useFormState(signUpAction, null);
  const { pending } = useFormStatus();

  function signUpAction(_, formData) {
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const age = formData.get("age");
    const email = formData.get("email");
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber");

    if (!name || !lastName || !age || !email || !password || !phoneNumber) {
      return { error: "Все поля обязательны" };
    }

    const userData = { name, lastName, age, email, password, phoneNumber };

    dispatch(registerUser(userData));
    return { success: "Регистрация успешна" };
  }

  return (
    <AppContainer>
      <form className={styles.form} action={formAction}>
        <h1>Регистрация</h1>
        <input type="text" name="name" placeholder="имя" required />
        <input type="text" name="lastName" placeholder="фамилия" required />
        <input type="number" name="age" placeholder="возраст" required />
        <input
          type="tel"
          placeholder="тел. номер"
          name="phoneNumber"
          required
        />
        <input type="email" name="email" placeholder="эл. почта" required />
        <input type="password" name="password" placeholder="пароль" required />

        {state?.error && <p className={styles.error}>{state.error}</p>}

        <div className={styles.btns}>
          <p>
            Уже есть аккаунт?{" "}
            <span onClick={() => setHasAccount(true)}>Войти</span>
          </p>
          <Button>{pending ? "Сохранение..." : "Сохранить"}</Button>
        </div>
      </form>
    </AppContainer>
  );
};
