
import { Link as Anchor } from "react-router-dom";
export default function DiscoverSection() {
    return (
            <div className="lg:w-1/2 my-4 py-7">
                <div className="flex justify-center w-auto">
                    <div className="w-auto md:w-4/5 lg:w-3/5 mx-5">
                        <h3 className="font-bold text-sm md:text-xl lg:text-3xl xl:text-5xl">
                            Find the perfect destination
                        </h3>
                        <p className="text-base md:text- lg:text-xl xl:text-3xl my-4">
                            Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                        </p>
                        <Anchor
                            to='/city'
                            className="flex justify-center w-[150px] px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-400 transition duration-300 ease-in-out"
                            >
                            View More
                        </Anchor>
                    </div>
                </div>
            </div>

        )
    }