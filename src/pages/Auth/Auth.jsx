import { useEffect, useState } from "react";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import styles from "./Auth.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserState } from "store/authSlice";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const userFromStorage = JSON.parse(localStorage.getItem("user-data"));

  useEffect(() => {
    if (!user && userFromStorage) {
      dispatch(setUserState(userFromStorage));
    }
  }, []);

  useEffect(() => {
    if (user) {
      navigate("profile");
    }
  }, [user]);

  return (
    <main className={styles.profile}>
      {hasAccount ? (
        <SignIn setHasAccount={setHasAccount} />
      ) : (
        <SignUp setHasAccount={setHasAccount} />
      )}
    </main>
  );
};
