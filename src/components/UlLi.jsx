

const UlLi = ({text,className}) => {
  return (
    <div>
<h3 className={`font-semibold cursor-pointer font-Inter text-ul duration-300 hover:text-paimary text-secondary ${className}`}>{text}</h3>
    </div>
  )
}

export default UlLi