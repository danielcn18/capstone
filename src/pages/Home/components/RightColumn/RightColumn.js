
import React from "react";

import { 
  IoChevronBackOutline,
  IoChevronForward,
  IoTriangleSharp,
} from "react-icons/io5";

// social media icons
import { 
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import ArtistProfile from '../../../../images/kendrick.png';
import AlbumCover from '../../../../images/jcoleAlbumCover.jpg';


function RightColumn() {
    return (
        <div className='bg-secondary grid gap-1.5 row-span-1 col-start-3 col-end-4 h-full w-full rounded-lg overflow-hidden bg-slate-700 bg-gradient-to-b from-dark-jungle-green to-onyx-300' style={{gridTemplateRows: "auto 1fr"}}> {/* Right Half - Home, Search, Library */}
          <header className='w-full h-16 bg-black-transparent flex justify-between items-center border-box py-4 px-8'>
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
                  <div className='grid grid-cols-4 grid-rows-1 overflow-y-hidden flex-nowrap row-span-1 relative' style={{marginInline: "-0.75rem"}}> {/* will have to js to add /remove [.card]s from grid to avoid overflowing */} {/* and will use breakpoints */}
                    <Link to="/dashboard" className='card flex gap-y-2 flex-col border-box relative p-3 after:h-full after:w-full after:z-0 after:absolute after:content-[""] after:top-0 after:left-0 after:rounded-md after:hover:bg-dark-jungle-green'> 
                      <div className='w-full aspect-square z-10 relative'>
                        <img src={ArtistProfile} alt="artist_img" className='rounded-full' style={{boxShadow: '0 8px 24px rgba(0,0,0,0.5)'}} /> 
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
    );
}

export default RightColumn;