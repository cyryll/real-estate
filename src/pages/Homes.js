import Cards from "../components/Cards/Cards"
import PageHero from "../components/Hero/PageHero"

const Homes = () => {
    const title = "Our Homes"
    const url = require('../images/ImageOne.jpg').default
    return (
        <>
         <PageHero title = {title} url={url}/>
        <Cards/>
        </>
    )
}

export default Homes
