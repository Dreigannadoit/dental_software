import Header from "./Header";
import Side_Bar from "./Side_Bar";


function ProtectedLayout({ children }) {
  return (
    <>
      <Header current_page="Dashboard" />

      <Side_Bar />

      <div className="user_content glassmorphism shadow">
         { children }
      </div>
    </>
  );
}

export default ProtectedLayout;
