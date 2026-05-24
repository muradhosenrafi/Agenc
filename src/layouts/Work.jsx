import Container from "../components/Container"
import Flex from "../components/Flex"
import Headding from "../components/Headding"
import Para from "../components/Para"
import UlLi from "../components/UlLi"
import WorkCard from "../components/WorkCard"

import workcard1 from "../assets/Rectangle 29.png"
import workcard2 from "../assets/card.png"
import workcard3 from "../assets/Rectangle 29 (2).png"
import workcard4 from "../assets/Rectangle 29 (3).png"
import workcard5 from "../assets/Rectangle 29 (4).png"
import workcard6 from "../assets/Rectangle 29 (5).png"


const Work = () => {
  return (
  <section className="bg-[#F3F3F3] py-[150px]">
<Container>
    <Headding className="text-center" text="Our Recent Work"/>
    <Para className="mx-auto text-center" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
 
       <Flex className="justify-between py-[50px]">
         <UlLi text="All"/>
         <UlLi text="Mobile Design"/>
         <UlLi text="Web design"/>
         <UlLi text="Branding"/>
         <UlLi text="Illustration"/>
         <UlLi text="Digital Marketing"/>
       </Flex>

<Flex className="flex-wrap justify-between gap-y-5">
  <WorkCard className="" workicon={workcard1} text="Task Management App" title="This is a task management application that can help you be more "/>
  <WorkCard className="" workicon={workcard2} text="Saas Landing Page Design" title="This is a task management application that can help you be more "/>
  <WorkCard className="" workicon={workcard3} text="App Design" title="This is a task management application that can help you be more "/>
  <WorkCard className="" workicon={workcard4} text="Landing Page Design" title="This is a task management application that can help you be more "/>
  <WorkCard className="" workicon={workcard5} text="Dashboard Design" title="This is a task management application that can help you be more "/>
  <WorkCard className="" workicon={workcard6} text="Web App Design" title="This is a task management application that can help you be more "/>
</Flex>  

</Container>
  </section>
  )
}

export default Work