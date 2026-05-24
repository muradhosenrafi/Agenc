import Agenc from "./layouts/Agenc"
import Banner from "./layouts/Banner"
import Navbar from "./layouts/Navbar"
import Ratting from "./layouts/Ratting"
import Reviews from "./layouts/Reviews"
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
      <Reviews/>
    </div>
  )
}

export default App