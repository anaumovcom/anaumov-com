import React from 'react';
import {Text, TitleH1, TitleH2, WelcomeBlock, WelcomeWrapper} from "./welcome.style";
import Skills from "../../components/skills/skills.component";

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <WelcomeBlock>
                <TitleH1>Hi, I'm Alex, Front-end Developer</TitleH1>
                <TitleH2>I design and code beautifully simple things, and I love what I do.</TitleH2>
                <Skills/>
            </WelcomeBlock>
        </WelcomeWrapper>
    );
};

export default Welcome;
