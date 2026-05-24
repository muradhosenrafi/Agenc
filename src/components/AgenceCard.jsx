import Image from "./Image"
import Headding from './Headding';
import Para from "./Para";


const AgenceCard = ({agencimg,text,title,className}) => {
  return (
    <div className={`w-[344px] h-[176px] flex flex-col  justify-start ${className}`}>
     <Image src={agencimg}/>
     <Headding className=" pt-5 pb-2.5 text-[25px]" text={text}/>
     <Para className="!w-[330px]" text={title}/>
    </div>
  )
}

export default AgenceCard