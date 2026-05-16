import Content from "./components/Content"


const Des = ({descp,tite}) => {
  return (
    <div className="pb-[10px]">
    <Content className="text-title font-bold text-center" decription={descp}/>
    <Content className="pt-[5px] mx-auto text-p font-normal text-secondary text-center w-[600px]" title={tite}/>
    </div>
  )
}

export default Des