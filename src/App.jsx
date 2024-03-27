import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Cart from './Pages/cart';
import './index.css'

function App() {
  return(
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );

}

export default App
