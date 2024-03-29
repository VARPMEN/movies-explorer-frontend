import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

function Layout() {
  let location = useLocation();

  const accessFooterRoutes = ["/", "/movies", "/saved-movies"];
  const isAccessFooterRoute = accessFooterRoutes.includes(location.pathname);

  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {isAccessFooterRoute && <Footer />}
    </div>
  );
}

export default Layout;
