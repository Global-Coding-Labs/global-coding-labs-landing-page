import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Container, Flex, Headline1, Emphatize } from "../../styles/Components";
import { FadeIn } from '../../hooks';
import { motion } from 'framer-motion';

interface PillProps {
    for: string; 
    style?: CSSProperties | CSSProperties[];
}

function Pill(props: PillProps) {
    const { for: text, style, ...rest } = props;
    return (
        <PillContainer {...rest}>
            <p>{text}</p>
        </PillContainer>
    );
}

const PillContainer = styled.div<{ style?: CSSProperties | CSSProperties[]; }>`
    border: 1px solid #828282;
    padding: .5em 2em;
    border-radius: 3em;
    margin: 1.25em .75em 0 0; 

    p {
        color: #828282;
        font-weight: 600;
    }
`;

export default function Services() {
    const services = [
        'Web development',
        'Web design',
        'UI/UX',
        'Mobile development',
        'Business intelligence',
        'IT Outsourcing',
        'Animations',
        'Software development'
    ];

    const controls = FadeIn(8.5);

    return (
        <CustomContainer>
            <Flex justifySpaceBetween alignCenter>
                <Heading animate={controls} initial={{ y: 20, opacity: 0 }}>
                    <Headline1>Our <Emphatize>Services</Emphatize></Headline1>
                </Heading>
                <Pills animate={controls} initial={{ y: 20, opacity: 0 }}>
                    {services.map((service: string) => <Pill key={service} for={service} />)}
                </Pills>
            </Flex>
        </CustomContainer>
    );
}

const CustomContainer = styled(Container)`
    padding: 9em 0;
`;

const Heading = styled(motion.div)`
    padding: 0 4em 0 0;

    h1 {
        line-height: .9;
    }
`;

const Pills = styled(Flex)`
    height: auto;
    align-items: space-between;
    flex-wrap: wrap;
`;