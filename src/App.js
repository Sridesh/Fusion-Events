import Navbarc from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
import './App.css';
import Home from "./Home";
import Footer from "./Footer";
import List from "./List";
import Test from "./test";
import Cardz from "./Cardz";
import Venues from "./venues";
import Show from "./show";
import Des from "./des";
import LogIn from "./login";
import Inside from "./inside";
import DropdownBtn from "./Components/Dropdown";
import Inquiries from "./Components/inquiries";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbarc/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/inside/:index" element={<Inside/>} />
        </Routes>
        <Footer/> */}
        {/* <LogIn/> */}
        <Inquiries/>

        {/* <Test/> */}
      </div>
    </Router>
  );
}

export default App;
