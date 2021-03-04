import PageHero from "../components/Hero/PageHero"
import InfoSection from "../components/InfoSection/InfoSection"
import { InfoThree } from "../data/InfoData"
const About = () => {
    const title = "About us"
    const url = require('../images/ImageTwo.jpg').default
    return (
        <>
        <PageHero title = {title} url={url}/>
        <InfoSection {...InfoThree}/>
        </>
    )
}

export default About
