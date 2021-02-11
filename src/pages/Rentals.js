import Cards from "../components/Cards/Cards"
import PageHero from "../components/Hero/PageHero"

const Rentals = () => {
    const title = "View Our Rentals"
    const url = require('../images/ImageFour.jpg').default
    return (
        <>
            <PageHero title = {title} url={url}/>
        </>
    )
}

export default Rentals
