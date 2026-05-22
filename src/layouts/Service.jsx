import Container from "../components/Container"
import Headding from "../components/Headding"
import Para from "../components/para"
import ServiceCard from "../components/ServiceCard"
import Flex from "../components/Flex"

import SerCard1 from "../assets/Group 1 (2).png"
import SerCard3 from "../assets/Group 2(1).png"
import SerCard4 from "../assets/Group 3.png"
import SerCard2 from "../assets/Group4.png"
import SerCard5 from "../assets/Group 5.png"
import SerCard6 from "../assets/Group 6.png"


const Service = () => {
  return (
<section className="py-[150px]">
      <Container>
    <Headding className="text-center" text="Our Provided Services"/>
      <Para className="mx-auto gap-5 text-center" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
 <Flex className="flex-wrap justify-between gap-y-5">
        <ServiceCard icone={SerCard1} text="Web Design" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
       <ServiceCard icone={SerCard3} text="UI/UX Design" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
       <ServiceCard icone={SerCard4} text="Web Development" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
       <ServiceCard icone={SerCard2} text="Motion Graphics" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
       <ServiceCard icone={SerCard5} text="3D Animation" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
       <ServiceCard icone={SerCard6} text="" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
 </Flex>
      </Container>
</section>
  )
}

export default Service