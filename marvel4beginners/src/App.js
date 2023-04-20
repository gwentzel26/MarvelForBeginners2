import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Movies from "./pages/Movies";
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path = "/" element={<Home />}></Route>
          <Route exact path = "/characters" element={<Characters />} ></Route>
          <Route exact path = "/comics" element={<Comics />}></Route>
          <Route exact path = "/movies" element={<Movies />}></Route>
        </Routes>
      
      </BrowserRouter>
      
 
    </div>
  );
}

export default App;
