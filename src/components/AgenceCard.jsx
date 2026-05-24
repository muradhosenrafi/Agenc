import Image from "./Image"
import Headding from './Headding';
import Para from "./Para";

import AgenceCard1 from "../assets/Group 1.png"
// import AgenceCard2 from "../assets/Group 1388.png"
// import AgenceCard3 from "../assets/Group 1389.png"


const AgenceCard = () => {
  return (
    <div className="w-[344px] h-[176px] bg-red-600">
     <Image className="" src={AgenceCard1}/>
     <Headding text="Innovative Ideas"/>
     <Para text="Because each project is different, we adapt to your business model."/>
    </div>
  )
}

export default AgenceCard