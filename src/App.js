import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/pageError/Error';
import Accommodation from './pages/accommodation/Accommodation.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error/>}>
          {' '}
        </Route>
        <Route path="/home" element={<Home />} errorElement={<Error/>}>
          {' '}
        </Route>
        <Route path="/about" element={<About />} errorElement={<Error/>}>
          {' '}
        </Route>
        <Route path="/notfind" element={<Error />} errorElement={<Error/>}>
          {' '}
        </Route>
        <Route path="/accommodation/:id" element={<Accommodation />} errorElement={<Error/>}>
          {' '}
        </Route>
        {/* Pour chaque route inexistante on redirige vers la route "/404" qui contient la page 404 */}
       <Route path="*" element={<Navigate to="/notfind" replace />} />
      </Routes>
    </div>
  );
}

export default App;
