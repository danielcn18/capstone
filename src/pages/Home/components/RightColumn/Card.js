import { Link } from "react-router-dom";

function Card() {
    return(
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
    );
}

export default Card;