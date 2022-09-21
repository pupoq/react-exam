import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Search from './pages3/Search';
import Fav from './pages3/Fav';
import './style.css'

function App() {

  return (
    <div> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Search />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
