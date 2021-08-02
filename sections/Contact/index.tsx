import { Container, Flex, Headline1, Headline2, Emphatize } from "../../styles/Components";

export default function Contact() {
    return (
        <Container>
            <Flex column alignCenter justifyCenter>
                <Headline2 style={{ textAlign: 'center' }}>
                    Has a project idea and wanna see it coming true?
                </Headline2>
                <Headline1><Emphatize>Contact us!</Emphatize></Headline1>
            </Flex>
        </Container>
    );
}