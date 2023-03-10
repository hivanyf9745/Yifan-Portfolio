import { Fragment } from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <hr className='mx-5' />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
