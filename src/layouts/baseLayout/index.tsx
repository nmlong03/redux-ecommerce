import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import  Footer  from "../../components/Footer";
import Menu from "../../components/Menu";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
