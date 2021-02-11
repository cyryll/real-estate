import { ImageH1 } from '../Cards/CardsElements'
import {
    HeroImage,
    HeroSection,
    HeroSlide,
    HeroSlider,
    HeroWrapper
} from './HeroElements'

const PageHero = (props) => {
    return (
        <>
            <HeroSection>
                <HeroWrapper>
                    <HeroSlide>
                        <HeroSlider>
                            <HeroImage src={props.url} alt = "hero image"/>
                            <ImageH1>{props.title}</ImageH1>
                        </HeroSlider>
                    </HeroSlide>
                </HeroWrapper>
            </HeroSection>
        </>
    )
}

export default PageHero
