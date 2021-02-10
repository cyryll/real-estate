import {
    HeroImage,
    HeroSection,
    HeroSlide,
    HeroSlider,
    HeroWrapper,
} from "../Hero/HeroElements"
import {
    CardContainer,
    CardH1,
    CardItems,
    CardSection,
    CardWrapper,
    ImageH1
} from "./CardsElements"
import Img1 from "../../images/ImageFour.jpg"
import CardItem from "./CardItem"
const Cards = () => {
    return (
        <>
            <HeroSection>
                <HeroWrapper>
                    <HeroSlide>
                        <HeroSlider>
                            <HeroImage src={require('../../images/ImageOne.jpg').default} alt="img" />
                            <ImageH1>Exporer our Homes</ImageH1>
                        </HeroSlider>
                    </HeroSlide>
                </HeroWrapper>
            </HeroSection>
            <CardSection>
                <CardH1>Our Homes</CardH1>
                <CardContainer>
                    <CardWrapper>
                        <CardItems>
                            <CardItem
                                src={Img1}
                                text="explore the amazon jungle waterfalls"
                                label="Adventure"
                                path="/services"
                            />
                            <CardItem
                                src='images/ImageFour.jpg'
                                text='Travel through the Islands of Bali in a Private Cruise'
                                label='Luxury'
                                path='/services'
                            />
                        </CardItems>
                        <CardItems>
                            <CardItem
                                src='images/ImageFour.jpg'
                                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                                label='Mystery'
                                path='/services'
                            />
                            <CardItem
                                src='images/ImageFour.jpg'
                                text='Experience Football on Top of the Himilayan Mountains'
                                label='Adventure'
                                path='/products'
                            />
                            <CardItem
                                src='images/ImageFour.jpg'
                                text='Ride through the Sahara Desert on a guided camel tour'
                                label='Adrenaline'
                                path='/sign-up'
                            />
                        </CardItems>
                    </CardWrapper>
                </CardContainer>
            </CardSection>
        </>
    )
}

export default Cards
