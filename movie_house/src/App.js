import './App.css';
import { Home } from './pages/Home';
import  { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { Wishlist } from './pages/Wishlist';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
          <Route path='/movies/wishlist' element={<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
 </>
  );
}

export default App;
