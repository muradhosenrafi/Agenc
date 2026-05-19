
const ListStyle = ({text,className}) => {
  return (
    <ul>
      <li className={`text-secondary text-ul hover:text-paimary duration-300 text-Inter cursor-pointer ${className}`}>
  {text}
</li>
    </ul>
  )
}

export default ListStyle