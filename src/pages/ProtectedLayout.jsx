import { useState } from "react";
import Header from "../components/Header";
import Side_Bar from "../components/Side_Bar";


function ProtectedLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <>
      <Header toggleSideNav={toggleSideNav} />

      <Side_Bar isNavOpen={isNavOpen}  />

      <div className="user_content glassmorphism shadow" >
         { children }
      </div>
    </>
  );
}

export default ProtectedLayout;
