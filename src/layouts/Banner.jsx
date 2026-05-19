import Container from "../components/Container"
import Flex from "../components/Flex"
import Image from "../components/Image"
import BannerImage from "../assets/Group 1390.png"
import Button from "../components/Button"
const Banner = () => {
  return (
<section className="pt-8 pb-[150px]">
        <Container>
        <Flex className="items-center"> 
          <div className="w-1/2">
          <h1 className="text-des font-bold text-Inter leading-desc  text-font">We Help brands with high quality services</h1>
          <p className="text-p w-[550px] pb-8 pt-5 text-secondary text-Inter font-normal">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          <Button className="" text="Get Started"/>
          </div>
          <div className="w-1/2">
          <Image className="" src={BannerImage} alt="" />
          </div>
        </Flex>
      </Container>
</section>
  )
}

export default Banner