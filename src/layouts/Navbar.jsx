import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import Logo from "../assets/logo.png"
import ListStyle from './../components/ListStyle';
import Button from "../components/Button"




const Navbar = () => {
  return (
    <div>
 <Container>
  <Flex className="justify-between items-center py-[50px]">
 {/* ----------------logo image start ===================*/}
<div>
  <Image src={Logo} alt="Logo.png" className=""/>
</div>
{/* ----------------logo image End ===================*/}
{/* ----------------logo Ul li start ===================*/}
<div>
<ul className="flex gap-6">
  <ListStyle text="Home"/>
  <ListStyle text="About"/>
  <ListStyle text="Service"/>
  <ListStyle text="Careers"/>
  <ListStyle text="Contact"/>
</ul>
</div>
{/* ----------------logo ul li End ===================*/}
{/* ----------------logo Button start ===================*/}
<div>
  <Button className="hover:bg-white border duration-300 hover:border-secondary hover:text-paimary" text="Contact"/>
</div>
{/* ----------------logo Button END===================*/}
  </Flex>
 </Container>
    </div>
  )
}

export default Navbar