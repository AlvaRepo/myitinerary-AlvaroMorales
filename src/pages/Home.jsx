import DiscoverSection from '../components/DiscoverSection';
import Carrousel from "../components/Carrousel";
import Footer from '../components/Footer';

export default function Home() {

    return (
        <main >
            <h3 className='flex p-3 items-center justify-center italic text-sm md:text-base lg:text-xl xl:text-4xl text-white font-semibold drop-shadow-lg h-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
                Find your perfect trip, designed by insiders who know and love their cities!
            </h3>

            <div className='flex flex-col-reverse justify-center lg:flex-row xl:flex flex-row 2xl:flex'>
                <DiscoverSection />
                <Carrousel/>
            </div>
            <Footer />
        </main>
    )
}
