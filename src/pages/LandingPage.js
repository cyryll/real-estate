import Hero from "../components/Hero/Hero";
import InfoSection from '../components/InfoSection/InfoSection';
import { InfoData, InfoTwo } from "../data/InfoData";
const LandingPage = () => {
    return (
        <>
            <Hero />
            <InfoSection {...InfoData}/>
            <InfoSection {...InfoTwo}/>
        </>
    )
}

export default LandingPage
