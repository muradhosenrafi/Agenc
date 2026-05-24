import Headding from "../components/Headding"
import Para from "../components/Para"
import Container from "../components/Container"
import ReviewsCard from "../components/ReviewsCard"
import Flex from "../components/Flex"

const Reviews = () => {
  return (
<section className="pt-[150px] pb-[245px]">
    <Container>
        <Headding className="text-center" text="Some Client Reviews"/>
        <Para className="mx-auto text-center py-5 "  text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
   <Flex className="justify-between">
         <ReviewsCard />
        <ReviewsCard/>
        <ReviewsCard/>

   </Flex>
    </Container>
</section>
  )
}

export default Reviews