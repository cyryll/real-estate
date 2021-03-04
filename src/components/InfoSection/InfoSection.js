import { Button } from '../Button'
import {
    Container,
    LColumn,
    RColumn,
    Section
} from "./InfoElements"

const InfoSection = ({ heading, paragraghOne, paragraghTwo, buttonLabel, reverse, image, path }) => {
    return (
        <Section>
            <Container >
                <RColumn reverse={reverse}>
                    <img src={image} alt="home" />
                </RColumn>
                <LColumn>
                    <h1>{heading}</h1>
                    <p>{paragraghOne}</p>
                    <p>{paragraghTwo}</p>
                    <Button primary="true" to={path}>{buttonLabel}</Button>
                </LColumn>

            </Container>
        </Section>
    )
}

export default InfoSection
