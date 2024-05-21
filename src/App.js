import './App.css';
import { 
  GoHomeFill,
  GoSearch,
  GoPlus,
} from "react-icons/go";
import { 
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { 
  IoLibrarySharp,
  IoChevronBackOutline,
  IoChevronForward,
  IoTriangleSharp,
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
import ArtistProfile from './images/kendrick.png';
import AlbumCover from './images/jcoleAlbumCover.jpg';

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
        <div className='bg-secondary grid gap-1.5 row-span-1 col-start-3 col-end-4 h-full w-full rounded-lg overflow-hidden bg-slate-700 bg-gradient-to-b from-dark-jungle-green to-onyx-300' style={{gridTemplateRows: "auto 1fr"}}> {/* Right Half - Home, Search, Library */}
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
          <main className='h-full overflow-y-scroll'>
            <section className='py-2 border-box'>
              <div className='flex flex-col px-5 gap-y-6'>
                <section> {/* popular artists */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Popular artists</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 grid-rows-1 overflow-y-hidden flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> {/* will have to js to add /remove [.card]s from grid to avoid overflowing */} {/* and will use breakpoints */}
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'> {/* I want this whole element to scale(105) when hovered over but it's not working  */}
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */} 
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Kendrick Lamar</p>
                        <p className='text-sm font-normal text-gray-400'>Artist</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'> {/* I want this whole element to scale(105) when hovered over but it's not working  */}
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */} 
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Kendrick Lamar</p>
                        <p className='text-sm font-normal text-gray-400'>Artist</p>
                      </div> 
                    </Link>
                    <Link to="/" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'> {/* I want this whole element to scale(105) when hovered over but it's not working  */}
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */} 
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Kendrick Lamar</p>
                        <p className='text-sm font-normal text-gray-400'>Artist</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'> {/* I want this whole element to scale(105) when hovered over but it's not working  */}
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */} 
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Kendrick Lamar</p>
                        <p className='text-sm font-normal text-gray-400'>Artist</p>
                      </div> 
                    </Link>
                    <Link to="/" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'> {/* I want this whole element to scale(105) when hovered over but it's not working  */}
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */} 
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Kendrick Lamar</p>
                        <p className='text-sm font-normal text-gray-400'>Artist</p>
                      </div> 
                    </Link>
                    <Link to="/" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'> {/* I want this whole element to scale(105) when hovered over but it's not working  */}
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */} 
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Kendrick Lamar</p>
                        <p className='text-sm font-normal text-gray-400'>Artist</p>
                      </div> 
                    </Link>
                    
                  </div>
                </section>

                <section> {/* popular albums */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Popular artists</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={AlbumCover} alt="artist_img" className='rounded-md' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>2014 Forest Hills Drive</p>
                        <p className='text-sm font-normal text-gray-400'>J. Cole</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={AlbumCover} alt="artist_img" className='rounded-md' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>2014 Forest Hills Drive</p>
                        <p className='text-sm font-normal text-gray-400'>J. Cole</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={AlbumCover} alt="artist_img" className='rounded-md' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>2014 Forest Hills Drive</p>
                        <p className='text-sm font-normal text-gray-400'>J. Cole</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={AlbumCover} alt="artist_img" className='rounded-md' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>2014 Forest Hills Drive</p>
                        <p className='text-sm font-normal text-gray-400'>J. Cole</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={AlbumCover} alt="artist_img" className='rounded-md' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>2014 Forest Hills Drive</p>
                        <p className='text-sm font-normal text-gray-400'>J. Cole</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={AlbumCover} alt="artist_img" className='rounded-md' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>2014 Forest Hills Drive</p>
                        <p className='text-sm font-normal text-gray-400'>J. Cole</p>
                      </div> 
                    </Link>  

                  </div>
                </section>

                <section> {/* popular radio */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Popular radio</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="radio_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Post Malone Radio</p>
                        <p className='text-sm font-normal text-gray-400'>With Khalid, Rae Sremmurd, Juice WRLD and more</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="radio_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Post Malone Radio</p>
                        <p className='text-sm font-normal text-gray-400'>With Khalid, Rae Sremmurd, Juice WRLD and more</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="radio_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Post Malone Radio</p>
                        <p className='text-sm font-normal text-gray-400'>With Khalid, Rae Sremmurd, Juice WRLD and more</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="radio_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Post Malone Radio</p>
                        <p className='text-sm font-normal text-gray-400'>With Khalid, Rae Sremmurd, Juice WRLD and more</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="radio_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Post Malone Radio</p>
                        <p className='text-sm font-normal text-gray-400'>With Khalid, Rae Sremmurd, Juice WRLD and more</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="radio_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Post Malone Radio</p>
                        <p className='text-sm font-normal text-gray-400'>With Khalid, Rae Sremmurd, Juice WRLD and more</p>
                      </div> 
                    </Link> 

                  </div>
                </section>

                <section> {/* featured charts */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Featured Charts</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="featured_charts_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Top 50 - USA</p>
                        <p className='text-sm font-normal text-gray-400'>Your daily update of the most played tracks right now - USA.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="featured_charts_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Top 50 - USA</p>
                        <p className='text-sm font-normal text-gray-400'>Your daily update of the most played tracks right now - USA.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="featured_charts_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Top 50 - USA</p>
                        <p className='text-sm font-normal text-gray-400'>Your daily update of the most played tracks right now - USA.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="featured_charts_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Top 50 - USA</p>
                        <p className='text-sm font-normal text-gray-400'>Your daily update of the most played tracks right now - USA.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="featured_charts_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Top 50 - USA</p>
                        <p className='text-sm font-normal text-gray-400'>Your daily update of the most played tracks right now - USA.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="featured_charts_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Top 50 - USA</p>
                        <p className='text-sm font-normal text-gray-400'>Your daily update of the most played tracks right now - USA.</p>
                      </div> 
                    </Link> 

                  </div>
                </section>

                <section> {/* spotify playlists */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Spotify Playlists</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_playlist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Rise</p>
                        <p className='text-sm font-normal text-gray-400'>Positive and uplifting ambient intrumental tracks.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_playlist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Rise</p>
                        <p className='text-sm font-normal text-gray-400'>Positive and uplifting ambient intrumental tracks.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_playlist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Rise</p>
                        <p className='text-sm font-normal text-gray-400'>Positive and uplifting ambient intrumental tracks.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_playlist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Rise</p>
                        <p className='text-sm font-normal text-gray-400'>Positive and uplifting ambient intrumental tracks.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_playlist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Rise</p>
                        <p className='text-sm font-normal text-gray-400'>Positive and uplifting ambient intrumental tracks.</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_playlist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Rise</p>
                        <p className='text-sm font-normal text-gray-400'>Positive and uplifting ambient intrumental tracks.</p>
                      </div> 
                    </Link> 

                  </div>
                </section>

                <section> {/* spotify original podcasts */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Spotify original podcasts</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_original_podcast_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Joe Rogan Experience</p>
                        <p className='text-sm font-normal text-gray-400'>Joe Rogan</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_original_podcast_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Joe Rogan Experience</p>
                        <p className='text-sm font-normal text-gray-400'>Joe Rogan</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_original_podcast_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Joe Rogan Experience</p>
                        <p className='text-sm font-normal text-gray-400'>Joe Rogan</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_original_podcast_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Joe Rogan Experience</p>
                        <p className='text-sm font-normal text-gray-400'>Joe Rogan</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_original_podcast_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Joe Rogan Experience</p>
                        <p className='text-sm font-normal text-gray-400'>Joe Rogan</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="spotify_original_podcast_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Joe Rogan Experience</p>
                        <p className='text-sm font-normal text-gray-400'>Joe Rogan</p>
                      </div> 
                    </Link> 

                  </div>
                </section>

                <section> {/* trending episodes */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Trending Episodes</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="artist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Episode 15</p>
                        <p className='text-sm font-normal text-gray-400'>Jun 2021<span className='after:content-["•"] font-black inline-flex self-center mx-1'></span>22 min</p> {/* align content (dot) center */}
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="artist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Episode 15</p>
                        <p className='text-sm font-normal text-gray-400'>Jun 2021<span className='after:content-["•"] font-black inline-flex self-center mx-1'></span>22 min</p> {/* align content (dot) center */}
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="artist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Episode 15</p>
                        <p className='text-sm font-normal text-gray-400'>Jun 2021<span className='after:content-["•"] font-black inline-flex self-center mx-1'></span>22 min</p> {/* align content (dot) center */}
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="artist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Episode 15</p>
                        <p className='text-sm font-normal text-gray-400'>Jun 2021<span className='after:content-["•"] font-black inline-flex self-center mx-1'></span>22 min</p> {/* align content (dot) center */}
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="artist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Episode 15</p>
                        <p className='text-sm font-normal text-gray-400'>Jun 2021<span className='after:content-["•"] font-black inline-flex self-center mx-1'></span>22 min</p> {/* align content (dot) center */}
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="artist_img" className='rounded-md bg-testing h-full' /> 
                        <Link to="/btn" style={{transition: 'visibility 0.1s linear, opacity 0.2s linear, transform 0.2s ease'}} className='card-effect translate-y-2 opacity-0 absolute w-12 aspect-square right-2 bottom-2 bg-tealish-green-100 rounded-full flex justify-center items-center invisible hover:bg-tealish-green-200 hover:scale-105'>
                          <IoTriangleSharp className='rotate-90 text-black text-lg' /> {/* if audio avaible: show */}
                        </Link>
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>Episode 15</p>
                        <p className='text-sm font-normal text-gray-400'>Jun 2021<span className='after:content-["•"] font-black inline-flex self-center mx-1'></span>22 min</p> {/* align content (dot) center */}
                      </div> 
                    </Link> 

                  </div>
                </section>

                <section> {/* great first audiobooks */}
                  <div className='flex justify-between mt-7 mb-3'>
                    <h2 className='text-2xl font-bold hover:underline'>
                      <Link to="/" className='h-auto inline-flex items-center'>Great first audiobooks</Link>
                    </h2>
                    <span className='font-bold text-sm opacity-60 flex items-center hover:underline'>
                      <Link to="/" className='h-auto inline-flex'>Show all</Link>
                    </span>
                  </div>
                  <div className='grid grid-cols-6 flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> 

                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="audiobook_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Perfect Marriage</p>
                        <p className='text-sm font-normal text-gray-400'>Jeneva Rose</p>
                      </div> 
                    </Link> 
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="audiobook_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Perfect Marriage</p>
                        <p className='text-sm font-normal text-gray-400'>Jeneva Rose</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="audiobook_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Perfect Marriage</p>
                        <p className='text-sm font-normal text-gray-400'>Jeneva Rose</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="audiobook_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Perfect Marriage</p>
                        <p className='text-sm font-normal text-gray-400'>Jeneva Rose</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="audiobook_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Perfect Marriage</p>
                        <p className='text-sm font-normal text-gray-400'>Jeneva Rose</p>
                      </div> 
                    </Link>
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src="" alt="audiobook_img" className='rounded-md bg-testing h-full' /> 
                      </div>
                      <div className='flex flex-col gap-y-1 z-10'>
                        <p className='text-base text-white font-medium'>The Perfect Marriage</p>
                        <p className='text-sm font-normal text-gray-400'>Jeneva Rose</p>
                      </div> 
                    </Link>

                  </div>
                </section>
                
              </div>
              <div className='pt-10 pb-14'>
                <nav className='px-8'>
                  <div className='mt-8 flex flex-row flex-nowrap justify-between'>
                    <div className='w-full flex flex-row flex-nowrap'>
                      <div className='border-box mr-6 mb-8 w-1/5'>
                        <ul className='flex flex-col'>
                          <p className='text-base text-white font-bold'>Company</p>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>About</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Jobs</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>For the Record</p>
                          </Link>
                        </ul>
                      </div>
                      <div className='border-box mr-6 mb-8 w-1/5'>
                        <ul className='flex flex-col'>
                          <p className='text-base text-white font-bold'>Communities</p>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline'>For Artists</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Developers</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Advertising</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Investors</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Vendors</p>
                          </Link>
                        </ul>
                      </div>
                      <div className='border-box mr-6 mb-8 w-1/5'>
                        <ul className='flex flex-col'>
                          <p className='text-base text-white font-bold'>Useful links</p>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Support</p>
                          </Link>
                          <Link>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Free Mobile App</p>
                          </Link>
                        </ul>
                      </div>
                      <div className='border-box mr-6 mb-8 w-1/5'>
                        <ul className='flex flex-col'>
                          <p className='text-base text-white font-bold'>Spotify Plans</p>
                          <Link to="/" className='h-auto'>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Premium Individual</p>
                          </Link>
                          <Link to="/" className='h-auto'>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Premium Duo</p>
                          </Link>
                          <Link to="/" className='h-auto'>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Premium Family</p>
                          </Link>
                          <Link to="/" className='h-auto'>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Premium Student</p>
                          </Link>
                          <Link to="/" className='h-auto'>
                            <p className='my-1 text-base text-gray-400 hover:text-white hover:underline inline-flex'>Spotify Free</p>
                          </Link>
                        </ul>
                      </div>
                    </div>
                    <div className='mb-10 flex flex-row gap-4'>
                      <a href='https://www.instagram.com/spotify/' className='z-0 w-10 h-10 bg-baltic-sea flex justify-center items-center rounded-full hover:bg-zinc-400'>
                        <FaInstagram className='font-white z-10' />   
                      </a>
                      <a href='https://x.com/Spotify' className='z-0 w-10 h-10 bg-baltic-sea flex justify-center items-center rounded-full hover:bg-zinc-400'>
                        <FaTwitter className='font-white z-10' />   
                      </a>
                      <a href='https://www.facebook.com/Spotify/' className='z-0 w-10 h-10 bg-baltic-sea flex justify-center items-center rounded-full hover:bg-zinc-400'>
                        <FaFacebook className='font-white z-10' />   
                      </a>
                    </div>
                  </div>
                  <hr className='mb-6 border-gray-800 border-0 border-t' />
                  <div className='pt-4 flex'>
                    <div className='pr-4'>
                      <p className='text-sm text-gray-400'>© 2024 Spotify AB</p>
                    </div>
                  </div>
                </nav>
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
