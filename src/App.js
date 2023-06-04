import Home from "./component/Home";
import './tailwind-output-style.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Surat from "./component/Surat";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Product from "./component/Product";
import TentangKami from "./component/TentangKami";

function App() {
  return (
    <Router>
      <div className="App w-full h-full">
        <Navbar/>        
        <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/Product'} element={<Product/>}/>
        <Route exact path={'/surah/:index'} element={<Surat/>}/>
        <Route exact path={'/TentangKami'} element={<TentangKami/>}/>
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
