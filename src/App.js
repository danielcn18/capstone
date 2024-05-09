import './App.css';
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoLibrarySharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
} from "react-router-dom";
import Logo from './images/Spotify_Logo_CMYK_White.png';

function App() {
  return (
    <Router>
      <div className='w-full h-screen flex flex-nowrap'>
        <div className='inline-flex flex-col min-w-72 max-w-md border-box p-1.5 gap-1.5 fixed'> {/* Left Half - Static */}
          <ul className='w-100 flex flex-col bg-secondary rounded-lg bg-secondary border-box p-4 gap-y-4'>
          
            <Link to="/dashboard" className='inline-flex max-w-max'>
              <img src={Logo} style={{width: '6rem'}}/>
            </Link>
          
            <li className='h-10 flex items-center'>
              <Link to="/dashboard" className='flex-row flex items-center gap-x-5 opacity-60 hover:opacity-100 transition-opacity duration-1000'>
                <GoHomeFill style={{fontSize: '2rem'}} />
                <p className='font-medium text-lg'>Home</p>
              </Link>
            </li>
            <li className='h-10 flex items-center'>  
              <Link to="/search" className='flex-row flex items-center gap-x-5 opacity-60 hover:opacity-100 transition-opacity duration-1000'>
                <GoSearch style={{fontSize: '2rem'}} />
                <p className='font-medium text-lg'>Search</p>
              </Link>
            </li>
          </ul>
          <ul className='w-100 flex flex-col bg-secondary rounded-lg bg-secondary border-box p-2 gap-y-4'>
            <div className='px-2'>
              <li className='flex flex-row justify-between'>
                <button className='flex-row inline-flex max-w-max items-center gap-x-5 opacity-60 hover:opacity-100 transition-opacity duration-1000'> 
                  <IoLibrarySharp style={{fontSize: '2rem'}} />
                  <p className='font-medium text-lg'>Your Library</p>
                </button>
                <button className='flex items-center rounded-full aspect-square w-8 justify-center hover:bg-neutral-900 active:bg-black plus-btn'>
                  <GoPlus className='text-2xl opacity-60 transition-opacity w-full h-full duration-700 hover:opacity-100' />
                </button>
              </li>
            </div>
            <div className='pb-20 flex flex-col gap-y-4'>
              <section className='flex w-full flex-col bg-neutral-800 rounded-lg border-box p-4 gap-y-5'>
                <div>
                  <p className='text-base font-medium'>Create your first playlist</p>
                  <p className='text-sm font-medium'>It's easy, we'll help you</p>
                </div>
                <button className='inline-flex rounded-full max-w-max bg-white items-center justify-center px-4 py-1 hover:scale-105 hover:opacity-90'>
                  <p className='text-sm font-medium text-black'>Create Playlist</p>
                </button>
              </section>
              <section className='flex w-full flex-col bg-neutral-800 rounded-lg border-box p-4 gap-y-5'>
                <div>
                  <p className='text-base font-medium'>Let's find some podcasts to follow</p>
                  <p className='text-sm font-medium'>We'll keep you updated on new episodes</p>
                </div>
                <button className='inline-flex rounded-full max-w-max bg-white items-center justify-center px-4 py-1 hover:scale-105 hover:opacity-90'>
                  <p className='text-sm font-medium text-black'>Browse podcasts</p>
                </button>
              </section>
            </div>
          </ul>
        </div>
        <div className='inline-flex flex-col border-box p-1.5 gap-1.5'> {/* Right Half - Home, Search, Library */}

        </div>
        
        {/* <Link to="/dashboard">Home</Link> */}

        {/* <Routes> 
          <Route path="/dashboard" element={<Home />} /> 
          <Route path="/library" element={<Library />} /> 
          <Route path="/search" element={<Search />} /> 
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
