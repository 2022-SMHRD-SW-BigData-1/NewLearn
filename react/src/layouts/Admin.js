import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Main from "../views/Index";
import routesF from "routes.js";
import routesS from "routesF.js";
import routesH from "routesH";
import Board from "../views/examples/board.js";
import Detail from "views/examples/Detail";

const Admin = (props) => {
  const mainContent = React.useRef();
  const location = useLocation();
  const [routes, setRoutes] = React.useState(routesF);
  console.log(props.board);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
    if (JSON.parse(localStorage.getItem("user")) == undefined) {
      setRoutes(routesF);
    } else {
      if (JSON.parse(localStorage.getItem("user")).hosp_num == undefined) {
        setRoutes(routesS);
      } else {
        setRoutes(routesH);
      }
    }
  }, [location]);

  // rout 바꾸는 거
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        console.log(routes[i].name);
        return routes[i].name;
      }
    }
    return "메인화면";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        {/* 여기가 상단 네비 바  */}
        {JSON.parse(localStorage.getItem("user")) == undefined ? (
          <AuthNavbar
            {...props}
            brandText={getBrandText(props.location.pathname)}
          />
        ) : (
          <AdminNavbar
            {...props}
            brandText={getBrandText(props.location.pathname)}
          />
        )}

        <Switch>
          <Route path="/admin/board" render={(props) => <Board {...props} />} />
          <Route
            path="/admin/Detail"
            render={(props) => <Detail {...props} />}
          />
          {getRoutes(routes)}
          {/* <Redirect from="*" to="/admin/index" /> */}
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
