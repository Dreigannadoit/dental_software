import { useState } from "react";
import Header from "../components/Header";
import Side_Bar from "../components/Side_Bar";
import { Outlet, useLocation } from "react-router-dom";


function ProtectedLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsNavOpen((prev) => !prev);
  }


  return (
    <>
      <Header toggleSideNav={toggleSideNav} />

      <Side_Bar isNavOpen={isNavOpen}  />

      <div className={`user_content glassmorphism shadow`} >
        <Outlet />
      </div>
    </>
  );
}

export default ProtectedLayout;
