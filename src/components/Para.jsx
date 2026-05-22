

const Para = ({text,className}) => {
  return (
    <div>
        <p className={`font-Inter  font-normal text-p w-[609px] text-secondary leading-[26px] ${className}`}>{text}</p>
    </div>
  )
}

export default Para