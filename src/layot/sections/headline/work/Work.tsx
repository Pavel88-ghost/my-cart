import React from 'react';
import styled from "styled-components"


type WorkPropsType = {
    title: string
    text: string
    src:string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StyledButton as={"#"}>See more</StyledButton>
            <StyledButton as={"#"}>Save</StyledButton>
        </StyledWork>
    );
};


const StyledWork = styled.div`
    background-color: green;
    max-width: 280px;
    width: 100%;

`

const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
`


const StyledButton = styled.button`

`

const Title = styled.h1`

`

const Text = styled.p`

`

