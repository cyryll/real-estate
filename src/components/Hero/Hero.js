import { SliderData } from "../../data/SliderData"
import { Button } from "../Button"
import {
    Arrow,
    HeroContent,
    HeroImage,
    HeroSection,
    HeroSlide,
    HeroSlider,
    HeroWrapper,
    NextArrow,
    PrevArrow,
    SliderButtons
} from "./HeroElements"

const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                {SliderData.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage src={slide.images} alt= {slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button
                                        to={slide.path}
                                        primary="true"
                                        css={`
                                        max-width: 160px;`}>
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
