import Logo from '../../images/Spotify_Logo_CMYK_White.png';
import { Link } from 'react-router-dom';
import { 
  GoHomeFill,
  GoSearch,
  GoPlus,
} from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { IoLibrarySharp } from "react-icons/io5";


function LeftColumn() {
    return(
        <div 
          className='inline-flex h-full flex-col min-w-72 max-w-md border-box gap-2 row-span-1 col-span-1' 
          /* style={{width: `${columnX}px`}} */
          /* ref={columnRef} */
        > {/* Left Half - Static */}
          <ul className='w-full inline-flex h-fit flex-col bg-secondary rounded-lg border-box p-4 gap-y-4'>
        
            <Link to="/" className='inline-flex max-w-max'>
              <img src={Logo} style={{width: '6rem'}}/>
            </Link>
          
            <li className='h-10 flex items-center'>
              <Link to="/" className='flex-row flex items-center gap-x-5 opacity-60 hover:opacity-100 transition-opacity duration-1000'>
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
    );
}

export default LeftColumn;