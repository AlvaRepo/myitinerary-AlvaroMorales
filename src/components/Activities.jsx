import { useEffect, useState } from "react"
import axios from "axios";
import apiUrl from "../apiUrl";

export default function Activity({ itinerary_id }) {
  const [activities, setActivities] = useState()
  // let name = useSelector((store =>store.activities?.activities_from_itinerary));
  // console.log(name)
  const fillActivities = () => {
    console.log(JSON.stringify(itinerary_id))
    axios(apiUrl + '/activities?itinerary_id=' + itinerary_id)
      .then(res => setActivities(res.data.response))
      .catch(err => {
        setActivities([])
        console.log(err)
      })
  }
  useEffect(
    () => {
      fillActivities()
    }, []
  )
  return (
    <div className="flex flex-wrap items-center justify-center">
      { activities?.map(
        each =>
        
          <div
            key={each._id}
            className="flex rounded-xl text-[#f2f1eb] items-center justify-center p-2 m-4 bg-[#E3B483] drop-shadow-3xl"
          >
            
            <img
              className="relative w-[230px] h-[170px]"
              src={each.photo}
              alt={each.name}
            />
            
            <p className="items-center text-lg p-3 font-bold justify-center z-[2]">
              {each.name}
            </p>
          </div>
      )}
    </div>
  )
}
