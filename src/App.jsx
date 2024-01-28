import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import NavBar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGINAS
import LandingPage from './pages/landing/landing';
import SobreNosotros from './pages/sobre-nosotros';
import ProyectosCmd from './pages/proyectos-cmd';
import BaseDeDatos from './pages/base-de-datos-cmd';

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/sobre-nosotros', element: <SobreNosotros /> },
  { path: '/proyectos-cmd', element: <ProyectosCmd /> },
  { path: '/base-de-datos', element: <BaseDeDatos /> },
];

function App() {
  return (
    <>
      <PrimeReactProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}

export default App;
