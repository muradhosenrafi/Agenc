import Flex from "../components/Flex"
import Image from "../components/Image"
import Agence from "../assets/agence.png"
import Headding from "../components/Headding"
import Para from "../components/Para"
import Container from "../components/Container"
import AgenceCard from "../components/AgenceCard"


import AgenceCard1 from "../assets/Group 1.png"
import AgenceCard2 from "../assets/Group 1388.png"
import AgenceCard3 from "../assets/Group 1389.png"


const Agenc = () => {
  return (
<section className="py-[150px]">
<Container>
    <Flex className="">
  <div className='w-7/12'>
  <Headding className="w-[400px]" text="Why You Should Choose Agenc"/>
  <Para className="!w-[508px] pt-5 pb-[85px]" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>

<Flex className="flex-wrap justify-center">
  <AgenceCard className="" agencimg={AgenceCard1} text="Innovative Ideas" title="Because each project is different, we adapt to your business model."/>
<AgenceCard className="mt-8 ml-20" agencimg={AgenceCard2} text="Dedicated Support" title="We provide 24/7 support for all our clients and serve them professionally."/>
<AgenceCard className="mt-10"  agencimg={AgenceCard3} text="Honest Pricing" title="Pricing on projects are based on various analyzes and are cost effective."/>


</Flex>

  </div>




    <div className='w-5/12'>
    <Image src={Agence}/>
    </div>
</Flex>




</Container>
</section>
  )
}

export default Agenc