import LandingPage from "./pages/landing/landing";
import ProyectosCmd from "./pages/proyectos-cmd";
import SobreNosotros from "./pages/sobre-nosotros";
import BaseDeDatos from "./pages/base-de-datos-cmd";

const routes = [
  { path: '/', component: LandingPage },
  { path: '/sobre-nosotros', component: SobreNosotros},
  { path: '/proyectos-cmd', component: ProyectosCmd},
  { path: '/base-de-datos', component: BaseDeDatos},
];

export default routes;
