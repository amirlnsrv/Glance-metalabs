import { Outlet } from "react-router-dom";

import { Header } from "common/components/Header";
import { FooterNav } from "common/components/FooterNav";
import { ScrollToTop } from "helpers/ScrollToTop";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserState } from "store/authSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const userFromStorage = JSON.parse(localStorage.getItem("user-data"));

  useEffect(() => {
    if (!user && userFromStorage) {
      dispatch(setUserState(userFromStorage));
    }
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <FooterNav />
    </>
  );
};

export default Layout;
