

const RattingCard = ({ratinDes,title,className}) => {
  return (
    <div>
    <h3 className={`text-Inter text-font font-bold text-r ${className}`}>{ratinDes}</h3>
     <p className={`text-Inter text-secondary font-medium text-ul pb-5 ${className}`}>{title}</p>
    </div>
  )
}

export default RattingCard