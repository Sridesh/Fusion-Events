import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from "./Components/List";
import Test from "./test";
import Cardz from "./Components/Cardz";
import Venues from "./pages/venues";
import Show from "./Components/show";
import Des from "./pages/des";
import LogIn from "./pages/login";
import Inside from "./pages/inside";
import DropdownBtn from "./Components/Dropdown";
import Inquiries from "./Components/inquiries";
import Reviewpane from "./pages/reviewpane";
import Inqpane from "./pages/inqpane";
import Vendorhome from "./pages/vendorhome";
import Vendors from "./pages/Vendors";
import Eventorgs from "./pages/Eventorgs";
import Home from "./pages/Home";
import Visitorreg from './Components/visitorSU';
import Register from './pages/Register';
import SearchBar from './Components/searchbar';
import AdminMain from './pages/admin/AdminMain';
import CreateEvent from './Components/createvent';
import Vvenues from './Components/vvenues';
import CreatePkg from './Components/createpkg';
import EventSummary from './pages/event_summary';
import EventSummaryLogged from './pages/event_summary_logged';
import Contact from './pages/contact';
import About from './pages/Aboutus';
import InsideEventOrg from './Components/InsideEventOrg';
import EventOrgSummary from './pages/eventOrgSummary';
const Routesfile = () => {
    return ( 

        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/inside/:id" element={<Inside/>} />
                <Route path="/insideEventOrg/:id" element={<InsideEventOrg/>} />
                <Route path="/venues" element={<Venues/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/vendors" element={<Vendors/>} />
                <Route path="/eventorg" element={<Eventorgs/>} />
                <Route path="/vreg" element={ <Visitorreg/> } />
                <Route path="/register/:path" element={ <Register/> } />
                <Route path="/test" element={<Test/>} />
                <Route path="/search" element={<SearchBar/>} />
                <Route path="/vendor/:id" element={<Vendorhome/>} />
                <Route path="/admin" element={<AdminMain/>} />
                <Route path="/ccc" element={<CreateEvent/>} />
                <Route path="/vvenues" element={<Vvenues/>} />
                <Route path="/createpkg" element={<CreatePkg/>} />
                <Route path="/event_summary" element={<EventSummary/>} />
                <Route path="/event_summary_logged" element={<EventSummaryLogged/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/event_org_summary" element={<EventOrgSummary/>} />

            </Routes>
        </Router>
        
     );
}
 
export default Routesfile;