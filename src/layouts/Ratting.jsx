import  Container from "../components/Container"
import Flex from "../components/Flex"
import RattingCard from '../components/RattingCard'
import card1 from "../assets/Ellipse 1.png"
import card2 from "../assets/Ellipse 2.png"
import card3 from "../assets/Ellipse 3.png"
import card4 from "../assets/Ellipse 4.png"
import card5 from "../assets/Ellipse 5.png"
import Image from './../components/Image';
const Ratting = () => {
  return (
  <section>
<Container>
<Flex className="bg-box rounded-[20px] py-[85px] px-7">
    <div className="4/12">
    <p className="text-c text-paimary font-Inter font-medium">Our Success</p>
    <h2 className="text-d text-font font-Inter font-semibold w-[387px]">West cost Brand makers-Global Edge</h2>
    </div>
    <div className="8/12">
   <Flex className="justify-around">
    <div className=" ">
    <RattingCard className="" ratinDes="200+" title="Customer Satisfied"/>
    <div className="relative">

<div className="absolute left-[20px]  top-0 w-[35px] h-[35px] rounded-full">
   <Image className="" src={card1} alt="card.png" />
</div>
<div className="absolute  left-[40px]  top-0 w-[35px] h-[35px] rounded-full">
   <Image className="" src={card2} alt="card.png" />
</div>
<div className="absolute left-[60px]  top-0 w-[35px] h-[35px] rounded-full">
   <Image className="" src={card3} alt="card.png" />
</div>
<div className="absolute left-[80px]  top-0 w-[35px] h-[35px] rounded-full">
   <Image className="" src={card4} alt="card.png" />
</div>
<div className="absolute left-[100px]  top-0 w-[35px] h-[35px] rounded-full">
   <Image className="" src={card5} alt="card.png" />
</div>

    </div>

    </div>
    <div className="relative flex flex-col"> 
   <RattingCard className="" ratinDes="4.5" title="200+ Avg rating"/>
    </div>
    <div className="relative flex flex-col"> 
   <RattingCard className="" ratinDes="351+" title="Project Delivered"/>
    </div>

   </Flex>

    </div>
</Flex>
</Container>
  </section>
  )
}

export default Ratting