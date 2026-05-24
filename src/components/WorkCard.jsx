import Image from "./Image"

import Headding from "./Headding"
import Para from "./Para"

const WorkCard = ({className,workicon,text,title}) => {
  return (
<div className={`w-[424px] h-[457px] rounded-[20px] bg-white ${className}`}>
  <Image className="h-[311px]" src={workicon}/>
  <Headding className="!text-ul pt-[30px] text-center" text={text}/>
  <Para className="mx-auto text-center !w-[340px]" text={title}/>
</div>
  )
}

export default WorkCard