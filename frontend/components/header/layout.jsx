import { Fragment } from "react";
import Footer from "../footer/footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <hr className='mx-5' />
      <main>{children}</main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
