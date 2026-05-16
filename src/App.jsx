// components start
import ListStyle from "./components/ListStyle"
import Button from "./components/Button"
import Image from "./components/Image"
import Content from "./components/Content"
import Des from "./Des"
import WorkCard from "./components/WorkCard"
// img-start
import logo from "./assets/logo.png"
import Costomer1 from "./assets/Ellipse 1.png"
import Costomer2 from "./assets/Ellipse 2.png"
import Costomer3 from "./assets/Ellipse 3.png"
import Costomer4 from "./assets/Ellipse 4.png"
import Costomer5 from "./assets/Ellipse 5.png"

import star from "./assets/star.png"

import card1 from "./assets/Group 1 (2).png"
import card2 from "./assets/Group 2(1).png"
import card3 from "./assets/Group 3.png"
import card4 from "./assets/Group4.png"
import card5 from "./assets/Group 5.png"
import card6 from "./assets/Group 6.png"

import bancard1 from "./assets/card.png"
import bancard2 from "./assets/Rectangle 29 (2).png"
import bancard3 from "./assets/Rectangle 29 (3).png"
import bancard4 from "./assets/Rectangle 29 (4).png"
import bancard5 from "./assets/Rectangle 29 (5).png"
import bancard6 from "./assets/Rectangle 29.png"


const App = () => {
  return (
<div className= "container m-auto" >
  <div className="flex bet justify-between pt-16 bg-white sticky top-0 z-50">
  <Image src={logo} alt="gruppng" className="w-100 cursor-pointer" />
<div className="flex gap-10">
   <ListStyle className= "" text="Home"/>
   <ListStyle className="" text="About"/>
   <ListStyle className="" text="Service"/>
   <ListStyle className="" text="Careers"/>
</div>
    <Button className="hover:bg-white hover:text-paimary border duration-300 hover:border-secondary" text="Contact"/>
    </div>
<div className="pt-[225px] pb-[288px]">
 <div>
      <Content className="text-[75px] leading-[120%] w-[663px] font-bold " decription="We Help brands with high quality services"/>
      <Content className="w-[560px] pt-[20px] pb-[30px] text-secondary" pt title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
    </div>
     <Button className="hover:bg-paimary-500 hover:shadow-2xl hover:shadow-paimary-500 duration-300" text="Get Started"/>
</div>
<div className="flex bg-box pt-[85px] pb-[85px] rounded-[20px] gap-[110px] ">
  <div className="pl-[50px]">
      <Content className="text-[25px] font-medium text-paimary pb-[15px]" title="Our Success"/>
    <Content className=" text-[35px] w-[380px] font-semibold"  decription="West cost Brand makers-Global Edge"/>
  </div>
  <div>
<Content className="font-bold text-[50px]" decription="200+"/>
<Content className=" text-secondary text-[20px] pb-[20px] font-medium" title="Customer Satisfied"/>
<div className="flex">
  <Image src={Costomer1} alt="" className=""/>
<Image src={Costomer2} alt="" className=""/>
<Image src={Costomer3} alt="" className=""/>
<Image src={Costomer4} alt="" className=""/>
<Image src={Costomer5} alt="" className=""/>
</div>
  </div>
  <div>
<Content className="font-bold text-[50px]" decription="4.5"/>
<Content className=" text-secondary text-[20px] pb-[20px] font-medium" title="200+ Avg rating"/>
<div className="flex">
  <Image src={star} alt="" className=""/>
<Image src={star} alt="" className=""/>
<Image src={star} alt="" className=""/>
<Image src={star} alt="" className=""/>
<Image src={star} alt="" className=""/>
</div>
  </div>
  <div>
<Content className="font-bold text-[50px]" decription="351+"/>
<Content className=" text-secondary text-[20px] pb-[20px] font-medium" title="Project Delivered"/>
<Content className=" text-paimary text-[20px] font-medium cursor-pointer" title="See Works"/>
<div className=" bg-paimary w-[100px] h-[1px] "></div>
  </div>
</div>

<section className="py-[150px]">

  {/* container */}
  <div className="container mx-auto">

    {/* heading */}
    <div className="text-center">
<Des className="" descp="Our Provided Services" tite="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
  

    </div>

    {/* cards section */}
    <div className="grid grid-cols-3 gap-[24px] pt-[50px]">

      <WorkCard
        className="bg-white rounded-[20px] mx-auto   text-center px-[30px] py-[50px]"
        src={card1}
        h2des="Web Design"
        pra="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
      />

      <WorkCard
        className="bg-white rounded-[20px] mx-auto   text-center px-[30px] py-[50px]"
        src={card2}
        h2des="UI/UX Design"
        pra="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
      />
      <WorkCard
        className="bg-white rounded-[20px] mx-auto text-center px-[30px] py-[50px]"
        src={card3}
        h2des="Web Development"
        pra="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
      />

      <WorkCard
        className="bg-white rounded-[20px] mx-auto text-center px-[30px] py-[50px]"
        src={card4}
        h2des="Motion Graphics"
        pra="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
      />

      <WorkCard
        className="bg-white rounded-[20px] mx-auto text-center px-[30px] py-[50px]"
        src={card5}
        h2des="3D Animation"
        pra="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
      />

      <WorkCard
        className="bg-white rounded-[20px] mx-auto text-center px-[30px] py-[50px]"
        src={card6}
        h2des="Digital Marketing"
        pra="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."
      />

    </div>

  </div>
</section >
<section className="bg-sec">
  <div>
  <Des className="" descp="Our Recent Work" tite="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
</div>
<div className="flex justify-between pt-[30px] pb-[10px]">
<ListStyle className="" text="All"/>
<ListStyle className="" text="Mobile Design"/>
<ListStyle className="" text="Web design"/>
<ListStyle className="" text="Branding"/>
<ListStyle className="" text="Illustration"/>
<ListStyle className="" text="Digital Marketing"/>
</div>
<div className="grid grid-cols-3 gap-[24px] pt-[50px]">
  <WorkCard className="" src={bancard1} h2des="Task Management App" pra="This is a task management application that can help you be more "/>
  <WorkCard className="" src={bancard2} h2des="Task Management App" pra="This is a task management application that can help you be more "/>
  <WorkCard className="" src={bancard3} h2des="Task Management App" pra="This is a task management application that can help you be more "/>
  <WorkCard className="" src={bancard4} h2des="Task Management App" pra="This is a task management application that can help you be more "/>
  <WorkCard className="" src={bancard5} h2des="Task Management App" pra="This is a task management application that can help you be more "/>
  <WorkCard className="" src={bancard6} h2des="Task Management App" pra="This is a task management application that can help you be more "/>
</div>


</section>

</div>
  )
}

export default App