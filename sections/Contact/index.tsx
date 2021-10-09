import styled from 'styled-components';
import { Container, Flex, Headline1, Headline2, Emphatize } from "../../styles/Components";

export default function Contact() {
    return (
        <CustomContainer>
            <Flex column alignCenter justifyCenter>
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