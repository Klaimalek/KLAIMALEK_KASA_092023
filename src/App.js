
import './App.css';
import{Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/pageError/Error';
import Accommodation from './pages/accommodation/Accommodation.jsx'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/home' element={<Home/>}> </Route>
     <Route path='/about' element={<About/>}> </Route>
     <Route path='/notfind' element={<Error/>}> </Route>
     <Route path='/accommodation/:id' element={<Accommodation/>}> </Route>
     </Routes>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
