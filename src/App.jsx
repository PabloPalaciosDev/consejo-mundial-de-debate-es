import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import NavBar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGINAS
import LandingPage from './pages/landing/landing';
import SobreNosotros from './pages/sobre-nosotros';
import ProyectosCmd from './pages/proyectos-cmd';
import JuntaDirectiva from './sections/sobre-nosotros/junta-directiva';
import PaisesMiembros from './pages/paises-miembros';

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/sobre-nosotros', element: <SobreNosotros /> },
  { path: '/junta-directiva', element: <JuntaDirectiva />},
  { path: '/miembros', element: <PaisesMiembros />},
  { path: '/proyectos-cmd', element: <ProyectosCmd /> }
];

function App() {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
        <NavBar />
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
