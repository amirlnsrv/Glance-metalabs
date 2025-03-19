import { Outlet } from "react-router-dom";

import { Header } from "../common/components/Header";
import { FooterNav } from "common/components/FooterNav";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterNav />
    </>
  );
};

export default Layout;
