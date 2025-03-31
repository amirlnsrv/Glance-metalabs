import { Outlet } from "react-router-dom";

import { Header } from "common/components/Header";
import { FooterNav } from "common/components/FooterNav";
import { ScrollToTop } from "helpers/ScrollToTop";

const Layout = () => {
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
