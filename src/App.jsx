import ListStyle from "./components/ListStyle"
import Button from "./components/Button"

const App = () => {
  return (
    <div>
   <ListStyle className="bg-red-500" text="Home"/>
   <ListStyle className="bg-blue-500" text="About"/>
   <Button className=" text-[#ffff] text-2xl  bg-red-500 py-[15px] px-[42px] round-[10px]" text="Contact"/>
    </div>
  )
}

export default App