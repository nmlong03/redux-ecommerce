import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import  Footer  from "../../components/Footer";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
