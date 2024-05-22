import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
} from "react-router-dom";
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';

function AppRoutes() {
    return (
        <Router>
            <div className='p-2 w-full h-screen grid gap-y-2 items-start' style={{gridTemplateRows: "1fr auto", gridTemplateColumns: "auto auto 1fr"}}>
                {/* <Link to="/dashboard">Home</Link> */}

                <Routes> 
                <Route 
                    path="/" 
                    element={<Home />} 
                />
                <Route 
                    path="/search"
                    element={<Search />} 
                />
                {/* <Route path="/library" element={<Library />} /> 
                <Route path="/search" element={<Search />} />  */}
                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutes;