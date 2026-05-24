import Image from "../components/Image"

import Headding from "../components/Headding"
import Para from "../components/Para"
import Flex from "../components/Flex"
const Reviw = ({reviwpic,text,title}) => {
  return (
    <div>
<Flex className="flex flex-row items-center gap-5">
<Image src={reviwpic}/>
<div className="flex flex-col">
    <Headding className="!font-semibold !leading-tight !text-[20px]" text={text}/>
    <Para text={title}/>
</div>
</Flex>
    </div>
  )
}

export default Reviw