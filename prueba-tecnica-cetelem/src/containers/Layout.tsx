import React from "react";
import { Container } from "../stylesApp";
import NavBar from "../components/navBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <div className="header">
        <NavBar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div className="sidepanel">
        {location &&
          (location.pathname === "/users" || location.pathname === "/") && (
            <button
              type="button"
              className="btn btn-primary btn-sm mx-auto"
              onClick={() => navigate("/newUser")}
            >
              Crear nuevo
            </button>
          )}
      </div>
    </Container>
  );
}
export default Layout;
