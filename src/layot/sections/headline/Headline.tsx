import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrawper";
import img from "../../../layot/sections/images/carta.jpg"
import styled from "styled-components"
import {Work} from "./work/Work";



export const Headline = () => {
    return (
        <div>
            <StyledHeadline>
                <FlexWrapper justify="space-around">
                    <Work src={img}
                          title={"Headline"}
                          text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
                </FlexWrapper>
            </StyledHeadline>
        </div>
    );
};

const StyledHeadline = styled.section`
    //min-height: 100vh;
    //background-color: #771818;
`


