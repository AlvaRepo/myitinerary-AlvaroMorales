import DiscoverSection from '../components/DiscoverSection';
import Carrousel from "../components/Carrousel";

export default function Home() {

    return (
        <main >
            <div className='flex flex-col'>
                <div className='flex flex-col-reverse justify-center lg:flex-row xl:flex flex-row 2xl:flex'>
                    <DiscoverSection />
                    <Carrousel/>
                </div>
            </div>
        </main>
    )
}
