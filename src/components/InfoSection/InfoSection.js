import {Button} from '../Button'
import {
    Container,
    LColumn,
    RColumn,
    Section
} from "./InfoElements"

const InfoSection = ({heading, paragraghOne, paragraghTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <LColumn>
                    <h1>{heading}</h1>
                    <p>{paragraghOne}</p>
                    <p>{paragraghTwo}</p>
                    <Button primary="true">{buttonLabel}</Button>
                </LColumn>
                <RColumn reverse={reverse}>
                    <img src={image} alt="home" />
                </RColumn>
            </Container>
        </Section>
    )
}

export default InfoSection
