import ListStyle from "./components/ListStyle"
import Button from "./components/Button"
import Image from "./components/Image"
import banner from "./assets/Group 1382.png"
import hero from "./assets/Group 1388.png"
import man from "./assets/Group 1386.png"
import ime from "./assets/Group 1383.png"

const App = () => {
  return (
    <div>
   <ListStyle className="bg-red-500" text="Home"/>
   <ListStyle className="bg-blue-500" text="About"/>
   <Button className="shadow-secondary hover:shadow-paimary shadow-2xl transition-all hover:scale-95" text="Contact"/>
   <Button className=" shadow-secondary shadow-2xl hover:shadow-paimary hover:shadow-2xl bg-transparent text-paimary border border-secondary hover:border-transparent hover:bg-transparent hover:text-[#696969] hover:bg-paimary duration-300" text="Get Started"/>
  <Image src={banner} alt="gruppng" className="w-100" />
  <Image src={hero} alt="gruppng" className="w-100" />
  <Image src={man} alt="gruppng" className="w-100" />
  <Image src={ime} alt="gruppng" className="w-100" />
    </div>
  )
}

export default App