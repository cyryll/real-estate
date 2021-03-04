import Hero from "../components/Hero/Hero";
import { RentalSliderData } from "../data/SliderData";

const Rentals = () => {
    const title = "View Our Rentals"
    const url = require('../images/ImageFour.jpg').default
    return (
        <>
            <Hero slides = {RentalSliderData}/>
        </>
    )
}

export default Rentals
