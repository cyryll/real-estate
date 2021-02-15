import { useState, useRef, useEffect } from 'react'
import { RentalSliderData } from "../../data/SliderData"
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

const RentalHero = () => {
    const [current, setCurrent] = useState(0)
    const length = RentalSliderData.length
    const timeout = useRef(null)

    //Slider animation
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function() {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    //move to the next slide
    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)

    }

    //move to previous slide
    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    //check if data is not an array and return null
    if (!Array.isArray(RentalSliderData) || RentalSliderData.length <= 0) {
        return null
    }
    return ( <
        HeroSection >
        <
        HeroWrapper > {
            RentalSliderData.map((slide, index) => {
                return ( <
                    HeroSlide key = { index } > {
                        index === current && ( <
                            HeroSlider >
                            <
                            HeroImage src = { slide.images }
                            alt = { slide.alt }
                            /> <
                            HeroContent >
                            <
                            h1 > { slide.title } < /h1> <
                            p > { slide.price } < /p> <
                            Button to = { slide.path }
                            primary = "true"
                            css = { `
                                        max-width: 160px;` } > { slide.label } <
                            Arrow / >
                            <
                            /Button> < /
                            HeroContent > <
                            /HeroSlider>
                        )
                    } <
                    /HeroSlide>
                )
            })
        } <
        SliderButtons >
        <
        PrevArrow onClick = { prevSlide }
        /> <
        NextArrow onClick = { nextSlide }
        /> < /
        SliderButtons > <
        /HeroWrapper> < /
        HeroSection >
    )
}

export default RentalHero