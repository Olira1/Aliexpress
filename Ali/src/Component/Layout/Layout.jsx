import React from "react";
import Header from "../Head/Header";

function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
