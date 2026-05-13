

const button = ({text,className}) => {
  return (
    <button className={`text-[#ffff] text-2xl  bg-paimary py-[15px] px-[42px] rounded-[10px] font-semibold ${className}`}>{text}</button>
  )
}

export default button