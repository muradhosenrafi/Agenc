import Agenc from "./layouts/Agenc"
import Banner from "./layouts/Banner"
import Navbar from "./layouts/Navbar"
import Ratting from "./layouts/Ratting"
import Service from "./layouts/Service"
import Work from "./layouts/Work"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Ratting/>
      <Service/>
      <Work/>
      <Agenc/>
    </div>
  )
}

export default App