import styled from "styled-components";
import { Container, Flex, Body } from "../../styles/Components";

export default function Footer() {
    return (
        <CustomContainer>
            <Flex column alignCenter justifyCenter>
                <Body>© 2019 Global Coding Labs. All rights reserved.</Body>
            </Flex>
        </CustomContainer>
    );
}

const CustomContainer = styled(Container)`
    padding: 6em 0;
`;
