import './App.css';
import { 
  GoHomeFill,
  GoSearch,
  GoPlus,
} from "react-icons/go";
import { 
  IoLibrarySharp,
  IoChevronBackOutline,
  IoChevronForward,
} from "react-icons/io5";
import { 
  TbWorld,
} from "react-icons/tb";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
} from "react-router-dom";
import React, { useState, useRef } from 'react';
import Logo from './images/Spotify_Logo_CMYK_White.png';

function App() {
  /* const [columnX, setColumnX] = useState(448); 
  const [isActive, setIsActive] = useState(false);
  const columnRef = useRef(null); 
  const scrollRef = useRef(null);

  const mouseUp = (e) => {
    scrollRef.current.classList.remove('after-bg');
  }

  const mouseDown = (e) => {
    
    // scrollRef.current.classList.add('after-bg');
    // const mouseX = e.clientWidth;
    // setColumnX(); // set to mousePos minus the previous columnX 
  } */

  useState(() => {
    
  }, []);

  return (
    <Router>
      <div className='p-2 w-full h-screen grid gap-y-2 items-start' style={{gridTemplateRows: "1fr auto", gridTemplateColumns: "auto auto 1fr"}}>
        <div 
          className='inline-flex h-full flex-col min-w-72 max-w-md border-box gap-2 row-span-1 col-span-1' 
          /* style={{width: `${columnX}px`}} */
          /* ref={columnRef} */
        > {/* Left Half - Static */}
          <ul className='w-full inline-flex h-fit flex-col bg-secondary rounded-lg border-box p-4 gap-y-4'>
        
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
          <ul className='w-full grow flex flex-col bg-secondary rounded-lg bg-secondary border-box p-2 justify-between'> {/* gap-y-4 */}
            <div className='px-2 mb-2'>
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
            <div className='mb-6 flex flex-col gap-y-4 overflow-y-auto max-h-72'> {/* max-h-72 */}
              <section className='flex w-full flex-col bg-neutral-800 rounded-lg border-box p-4 gap-y-5'>
                <div className='flex flex-col gap-y-1.5'>
                  <p className='text-base font-medium'>Create your first playlist</p>
                  <p className='text-sm font-medium'>It's easy, we'll help you</p>
                </div>
                <button className='inline-flex rounded-full max-w-max bg-white items-center justify-center px-4 py-1 hover:scale-105 hover:opacity-90'>
                  <p className='text-sm font-medium text-black'>Create Playlist</p>
                </button>
              </section>
              <section className='flex w-full flex-col bg-neutral-800 rounded-lg border-box p-4 gap-y-5'>
                <div className='flex flex-col gap-y-1.5'>
                  <p className='text-base font-medium'>Let's find some podcasts to follow</p>
                  <p className='text-sm font-medium'>We'll keep you updated on new episodes</p>
                </div>
                <button className='inline-flex rounded-full max-w-max bg-white items-center justify-center px-4 py-1 hover:scale-105 hover:opacity-90'>
                  <p className='text-sm font-medium text-black'>Browse podcasts</p>
                </button>
              </section>
            </div>
            <div className='w-full mb-5 px-4'>
              <section className='flex flex-row flex-wrap gap-y-3'>
                <p className='mr-5 text-xs opacity-70'>Legal</p>
                <p className='mr-5 text-xs opacity-70'>Safety & Privacy Center</p>
                <p className='mr-5 text-xs opacity-70'>Privacy Policy</p>
                <p className='mr-5 text-xs opacity-70'>Cookies</p>
                <p className='mr-5 text-xs opacity-70'>About Ads</p>
                <p className='mr-5 text-xs opacity-70'>Accessibility</p>
                <p className='mr-5 text-xs opacity-70'>Notice at Collection</p>
                <p className='mr-5 text-xs opacity-70'>Your Privacy Choices</p>
              </section>
              <a className='text-xs opacity-70 hover:underline'>Cookies</a>
            </div>
            <div className='w-full px-4 pb-4'>
              <button className='flex flex-row items-center border border-opacity-50 border-white rounded-full gap-x-0.5 px-3 py-1 hover:scale-105 hover:border-opacity-100'>
                <TbWorld className='text-xl' />
                <p className='text-sm font-bold'>English</p>
              </button>
            </div>
          </ul>
        </div>
        {/* <div 
          className='inline-flex row-span-1 col-start-2 col-end-3 w-0.5 h-full relative after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:absolute after:-left-0 after:hover:bg-smokey-grey after:w-0.5 after:rounded-lg after:h-middleScrollbarHeight' 
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          ref={scrollRef}
        /> */} {/* after:bg-white */}
        <div 
          className='inline-flex relative row-span-1 col-start-2 col-end-3 w-1.5 after:w-0.5 h-full after:h-middleScrollbarHeight after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:absolute after:left-1/2 after:hover:bg-smokey-grey after:rounded-lg' 
          /* onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          ref={scrollRef} */ 
        />
        <div className='bg-secondary grid gap-1.5 row-span-1 col-start-3 col-end-4 h-full w-full rounded-lg overflow-hidden' style={{gridTemplateRows: "auto 1fr"}}> {/* Right Half - Home, Search, Library */}
          <header className='w-full h-16 bg-black flex justify-between items-center border-box py-4 px-8 bg-gradient-to-r from-onyx-100 to-onyx-200'>
            <div className='inline-flex gap-x-2'>
              <button className='rounded-full p-2 bg-black flex justify-center items-center'>
                <IoChevronBackOutline className='text-white opacity-70 text-2xl w-min -translate-x-0.5'/>
              </button>
              <button className='rounded-full p-2 bg-black flex justify-center items-center'>
                <IoChevronForward className='text-white opacity-70 text-2xl w-min translate-x-0.5'/>
              </button>
            </div>
            <div className='inline-flex gap-x-6 items-center'>
              <Link to="/" className='text-base font-bold opacity-70 hover:opacity-100 hover:scale-105'>Sign up</Link>
              <span className='py-3 px-7 rounded-full bg-white hover:scale-105'>
                <Link to="/" className='text-black text-base font-bold'>Log in</Link>
              </span>
            </div>
          </header>
          <main className='bg-slate-700 bg-gradient-to-b from-dark-jungle-green to-onyx-300'>
            <section className='py-2 border-box'>
              <div className='flex flex-col px-5 gap-y-6'>
                <section className=''>
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Popular artists</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>
                        Show all
                      </Link>
                    </span>
                  </div>
                  <div>

                  </div>
                </section>
                
              </div>
            </section>
          </main>
        </div>
        <footer className='flex justify-between col-start-1 col-end-4 row-start-2 w-full h-16 bg-green-700 bg-gradient-to-r from-warm-purple-100 to-cornflower-blue text-white py-2 px-3 border-box'> {/* Footer */}
          <div className='inline-flex flex-col'>
            <p className='text-sm font-bold'>Preview of Spotify</p>
            <p className='text-base font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit cards needed.</p>
          </div>
          <button className='h-full w-auto bg-white px-5 rounded-full hover:opacity-90 hover:scale-105'>
            <p className='font-base font-semibold text-black'>Sign up free</p>
          </button>
        </footer>
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
