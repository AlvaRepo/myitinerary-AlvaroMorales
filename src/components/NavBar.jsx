import ButLogin from './ButLogin'
export default function NavBar() {
return (
        <nav className='mt-12 mx-20 flex h-6 items-center'>
            <div className='font-bold flex-1 w-2/3 '>
            <a className='text-xl ' href="#">My Tinerary</a>
            </div>
            <div className='flex gap-x-3 items-center'>
                
                <a className='font-semibold w-1/3' href="#">Home</a>
                <a className='font-semibold w-1/3' href="#">Cities</a>
                <ButLogin />
            </div>
            
        </nav>

)
}
