
const ListStyle = ({text,className}) => {
  return (
    <ul>
      <li className={`text-ul hover:text-paimary duration-300 cursor-pointer  ${className}`}>
  {text}
</li>
    </ul>
  )
}

export default ListStyle