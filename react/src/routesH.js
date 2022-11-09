import Index from "views/Index.js";
import hosp from "views/examples/hosp";

var routes = [
  {
    path: "/index",
    name: "메인화면",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/reservation",
    name: "예약확인",
    icon: "ni ni-pin-3 text-orange",
    component: hosp,
    layout: "/admin",
  },
];

export default routes;
