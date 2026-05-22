import Flex from "../components/Flex"
import Image from "../components/Image"
import Agence from "../assets/agence.png"
import Headding from "../components/Headding"
import Para from "../components/para"
import Container from "../components/Container"
import AgenceCard from "../components/AgenceCard"

const Agenc = () => {
  return (
<section className="py-[150px]">
<Container>
    <Flex className="">
  <div className='w-7/12 h-20'>
  <Headding className="w-[400px]" text="Why You Should Choose Agenc"/>
  <Para className="!w-[508px]" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
  </div>
    <div className='w-5/12 h-20 justify-center'>
    <Image className="w-[565px]" src={Agence}/>
    </div>
</Flex>

<AgenceCard/>
</Container>
</section>
  )
}

export default Agenc