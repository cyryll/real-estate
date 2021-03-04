import Hero from '../components/Hero/Hero'
import InfoSection from '../components/InfoSection/InfoSection';
import { InfoData, InfoTwo } from "../data/InfoData";
import { SliderData } from '../data/SliderData';
const LandingPage = () => {
    return (
        <>
            <Hero slides = {SliderData}/>
            <InfoSection {...InfoData}/>
            <InfoSection {...InfoTwo}/>
        </>
    )
}

export default LandingPage
