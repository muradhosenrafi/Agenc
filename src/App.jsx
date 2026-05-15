// components start
import ListStyle from "./components/ListStyle"
import Button from "./components/Button"
import Image from "./components/Image"
import Content from "./components/Content"
// img-start
import logo from "./assets/logo.png"
import Costomer1 from "./assets/Ellipse 1.png"
import Costomer2 from "./assets/Ellipse 2.png"
import Costomer3 from "./assets/Ellipse 3.png"
import Costomer4 from "./assets/Ellipse 4.png"
import Costomer5 from "./assets/Ellipse 5.png"

import star from "./assets/star.png"

const App = () => {
  return (
<div className= "container m-auto" >
  <div className="flex bet justify-between pt-16 bg-white shadow-lg shadow-[0_0px_0px_rgba(0,0,0,0.15)] sticky top-0 z-50">
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
     <Button className="hover:bg-paimary-500 hover:shadow-lg hover:shadow-paimary-500 duration-300" text="Get Started"/>
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

<div className="pt-[159px] pb-[159px]">
  <Content className="text-title font-bold text-center" decription="Our Provided Services"/>
    <Content className="leading-haight text-p font-normal text-center w-[600px]" title="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
</div>
</div>
  )
}

export default App