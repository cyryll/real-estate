import {
    HeroImage,
    HeroSection,
    HeroSlide,
    HeroSlider,
    HeroWrapper,
} from "../Hero/HeroElements"
import {
    CardH1,
    CardSection,
    ImageH1
} from "./CardsElements"
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
            </CardSection>
        </>
    )
}

export default Cards
