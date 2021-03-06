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
import CardItem from "./CardItem"
import { SliderData } from "../../data/SliderData"
const Cards = () => {
    return (
        <>
            <CardSection>
                <CardH1>Our Homes</CardH1>
                <CardContainer>
                    <CardWrapper>
                        <CardItems>
                            {SliderData.map((item, index) => (
                                index <= 1 && <CardItem
                                    src={item.images}
                                    text={item.title}
                                    label={item.label}
                                    path={item.link}
                                    key={index}
                                />
                            ))}
                        </CardItems>
                        <CardItems>
                            {SliderData.map((item, index) => (
                                index >= 1 && <CardItem
                                    src={item.images}
                                    text={item.title}
                                    label={item.label}
                                    path={item.link}
                                    key={index}
                                />
                            ))}
                        </CardItems>
                    </CardWrapper>
                </CardContainer>
            </CardSection>
        </>
    )
}

export default Cards
