import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import NavBar from './components/navbar/navbar';
import { BrowserRouter as Route, Routes, BrowserRouter} from 'react-router-dom';
//PAGINAS 
import LandingPage from './pages/landing/landing';
import SobreNosotros from './pages/sobre-nosotros';
import ProyectosCmd from './pages/proyectos-cmd';
import BaseDeDatos from './pages/base-de-datos-cmd';


const routes = [
  { path: '/', component: <LandingPage/> },
  { path: '/sobre-nosotros', component: <SobreNosotros/>},
  { path: '/proyectos-cmd', component: <ProyectosCmd/>},
  { path: '/base-de-datos', component: <BaseDeDatos/>},
];


function App() {

  return (
    <>
      <PrimeReactProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component}>
              </Route>
            ))}
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App
