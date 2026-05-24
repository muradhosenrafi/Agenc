import Image from "../components/Image"
import Reviw from "../components/Reviw"
import Para from "../components/Para"
import Flex from "../components/Flex"
import { FaStar } from "react-icons/fa6";
import Reviw1 from "../assets/Ellipse 32.png"

import reviewspic1 from "../assets/Vector.png"

const ReviewsCard = () => {
  return (
    <div className=" shadow-boxone w-[424px] py-[54px] px-[58px] h-[422px] rounded-[20px]">
<Image src={reviewspic1}/>
<Para className="py-[20px] !w-[307px]" text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."/>
<Flex className="pb-5">

<FaStar className=" w-[24px] h-[24px] text-reviews"/>
<FaStar className=" w-[24px] h-[24px] text-reviews"/>
<FaStar className=" w-[24px] h-[24px] text-reviews"/>
<FaStar className=" w-[24px] h-[24px] text-reviews"/>
<FaStar className=" w-[24px] h-[24px] text-reviews"/>

</Flex>
<Reviw reviwpic={Reviw1} text="Awlad Hossain" title="UX Researcher"/>



    </div>
  )
}

export default ReviewsCard