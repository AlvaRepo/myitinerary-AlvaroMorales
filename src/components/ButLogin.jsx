import LoginButt from './LoginButt'

export default function ButLogin() {
return (
    <button className='bg-[#4F46E5] hover:bg-[#6510f9] flex items-center buttonPlu p-5 h-[3rem] rounded-full'>
            <LoginButt />
            <div className='flex items-center ml-1 text-white font-bold text-lg lg:text-xl 2xl:text-2xl'>
                Login
            </div>
    </button>
    )
}
