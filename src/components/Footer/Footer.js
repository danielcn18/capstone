function Footer() {

    return(
        <footer className='flex justify-between col-start-1 col-end-4 row-start-2 w-full h-16 bg-green-700 bg-gradient-to-r from-warm-purple-100 to-cornflower-blue text-white py-2 px-3 border-box'> {/* Footer */}
          <div className='inline-flex flex-col'>
            <p className='text-sm font-bold'>Preview of Spotify</p>
            <p className='text-base font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit cards needed.</p>
          </div>
          <button className='h-full w-auto bg-white px-5 rounded-full hover:opacity-90 hover:scale-105'>
            <p className='font-base font-semibold text-black'>Sign up free</p>
          </button>
        </footer>
    );
}

export default Footer;