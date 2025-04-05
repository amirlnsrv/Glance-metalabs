import { loginUser } from "api/action";

import { useFormState, useFormStatus } from "react-dom";
import { useDispatch } from "react-redux";

import styles from "./SignIn.module.scss";
import { Button } from "common/ui/Button";
import { AppContainer } from "layouts/AppContainer";

export const SignIn = ({ setHasAccount }) => {
  const dispatch = useDispatch();
  const [state, formAction] = useFormState(signUpAction, null);
  const { pending } = useFormStatus();

  function signUpAction(_, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { error: "Все поля обязательны" };
    }

    const userData = { email, password };

    dispatch(loginUser(userData));
    return { success: "Вход выполнен успешно!" };
  }

  return (
    <AppContainer>
      <form className={styles.form} action={formAction}>
        <h1>Вход</h1>
        <input type="email" name="email" placeholder="почта" required />
        <input type="password" name="password" placeholder="пароль" required />
        {state?.error && <p className={styles.error}>{state.error}</p>}
        <div className={styles.btns}>
          <p>
            Нет Аккаунта?{" "}
            <span onClick={() => setHasAccount(false)}>Зарегистрироваться</span>
          </p>

          <Button disabled={pending}>
            {pending ? "Загрузка..." : "Войти"}
          </Button>
        </div>
      </form>
    </AppContainer>
  );
};
