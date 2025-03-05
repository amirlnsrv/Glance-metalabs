import { Outlet } from "react-router-dom";

import { Header } from "../common/components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
