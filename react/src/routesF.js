import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";

var routes = [
  {
    path: "/index",
    name: "메인화면",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "병원보기",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "마이페이지",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
];

export default routes;
