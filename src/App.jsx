import './App.css'

function App() {
  return (
    <>
    <body className=''>
    <nav className='my-9 mx-9 flex h-16'>
        <div className='mx-9 font-bold flex-1 w-2/3'>
          <a className='text-xl' href="#">My Tinerary</a>
        </div>
        <div className='flex gap-x-3'>
            
            <a className='font-semibold w-1/3' href="#">Home</a>
            <a className='font-semibold w-1/3' href="#">Cities</a>
            <button>
            <div className='font-semibold w-1/3'>
            <a href="#" className="px-6 py-1.5 flex buttonPlu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="true" viewBox="0 0 40 40" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              Login
              </a>
              </div>
            </button>
        </div>
        
    </nav>

    <div className="my-9 mx-9 flex ">
        <div className='my-9 w-3/4'>
            <h3 className='my-9 mx-9 font-bold text-xl'>Find the perfect destination</h3>
            <p className='texting my-9 mx-9 '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className="mx-9 buttonPlu hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View More</button>
        </div>
        <div className='my-9 mx-9'>
            <a href="#">
                <img className='my-9 mx-9 width-308' src="https://via.placeholder.com/308x200" alt="Ejemplo de imagen para carrusel"/>
            </a>
        </div>
    </div>
</body>
    </>
  )
}

export default App
