import styled from 'styled-components';
import { Container, Flex, Headline1, Headline2, Emphatize } from "../../styles/Components";
import { FadeIn } from '../../hooks';

export default function Contact() {
    const controls = FadeIn(10);

    return (
        <CustomContainer>
            <Flex animate={controls} initial={{ y: 20, opacity: 0 }} column alignCenter justifyCenter>
                <Headline2 style={{ textAlign: 'center' }}>
                    Has a project idea and wanna see it coming true?
                </Headline2>
                <Headline1><Emphatize>Contact us!</Emphatize></Headline1>
            </Flex>
        </CustomContainer>
    );
}

const CustomContainer = styled(Container)`
    padding: 9em 0;
`;