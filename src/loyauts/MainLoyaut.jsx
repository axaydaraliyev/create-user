import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function MainLoyaut() {
  return (
    <>
    <Header/>
     <main className="grow">
         <Outlet />
     </main>
      <Footer/>
    </>
  );
}

export default MainLoyaut;
