import ListStyle from "./components/ListStyle"
import Button from "./components/Button"
// import Image from "./components/Image"
// import Banner from '../assets/card.png'

const App = () => {
  return (
    <div>
   <ListStyle className="bg-red-500" text="Home"/>
   <ListStyle className="bg-blue-500" text="About"/>
   <Button className="shadow-secondary hover:shadow-paimary shadow-2xl transition-all hover:scale-95" text="Contact"/>
   <Button className=" shadow-secondary shadow-2xl hover:shadow-paimary hover:shadow-2xl bg-transparent text-paimary border border-secondary hover:border-transparent hover:bg-transparent hover:text-[#fff] hover:bg-paimary duration-300" text="Get Started"/>
   {/* <Image src={Banner} className="w-400"/> */}
    </div>
  )
}

export default App