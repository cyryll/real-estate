import { InfoData } from '../../data/InfoData'
import {Button} from '../Button'
import {
    Container,
    LColumn,
    RColumn,
    Section
} from "./InfoElements"

const InfoSection = () => {
    return (
        <Section>
            <Container>
                <LColumn>
                    <h1>{InfoData.heading}</h1>
                    <p>{InfoData.paragraghOne}</p>
                    <p>{InfoData.paragraghTwo}</p>
                    <Button primary="true">{InfoData.buttonLabel}</Button>
                </LColumn>
                <RColumn reverse={InfoData.reverse}>
                    <img src={InfoData.image} alt="home" />
                </RColumn>
            </Container>
        </Section>
    )
}

export default InfoSection
