
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
            
          </main>
        </div>
    );
}

export default RightColumn;