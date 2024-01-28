import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import NavBar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from './routes';

function App() {

  return (
    <>
      <PrimeReactProvider>
    <Router>
      <>
        <NavBar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </>
    </Router>
      </PrimeReactProvider>
    </>
  )
}

export default App
