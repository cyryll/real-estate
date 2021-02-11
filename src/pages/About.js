import PageHero from "../components/Hero/PageHero"
const About = () => {
    const title = "About us"
    const url = require('../images/ImageTwo.jpg').default
    return (
        <>
        <PageHero title = {title} url={url}/>
        </>
    )
}

export default About
