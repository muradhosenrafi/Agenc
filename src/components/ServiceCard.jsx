import Image from "./Image"
import Headding from "./Headding"
import Para from "./para"

const ServiceCard = ({icone,title,text}) => {
  return (

            <div className="flex flex-col hover:scale-105 duration-300 shadow-box items-center justify-center w-[410px] h-[415px] rounded-[20px]">
                <Image src={icone}/>
                <Headding className="pt-[40px] pb-[20px] !text-[25px]" text={text}/>
                <Para className="!w-[326px] leading-[26px] text-center"  text={title}/>
            </div>

 
  )
}

export default ServiceCard