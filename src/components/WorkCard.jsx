


const WorkCard = ({className,src,alt,h2des,pra}) => {
  return (
    <div className=" hover:shadow-2xl cursor-pointer w-[424px] h-[457px] duration-300 bg-white rounded-[20px]">
    <div className=" rounded-[20px]">
       <img className={className} src={src} alt={alt} />
    </div>
     <div className="text-center">
      <h2 className="font-bold text-ul text-font pt-[30px] pb-[10px]">{h2des}</h2>
     <p className={`font-normal leading-6 mx-auto text-secondary text-center w-[320px]`}>{pra}</p>
     </div>
    </div>
  )
}

export default WorkCard