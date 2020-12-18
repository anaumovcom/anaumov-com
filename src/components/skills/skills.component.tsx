import React from 'react';
import {Skill, SkillLine, SkillsWrapper, SkillText} from "./skills.style";
import {DiJavascript1, DiReact, DiSass} from "react-icons/di";
import {SiGraphql, SiHtml5, SiJest, SiRedux, SiStyledComponents, SiTypescript, SiApollographql, SiGatsby, SiNextDotJs} from "react-icons/all";

const Skills = (props: any) => {
    return (
        <SkillsWrapper>
            <SkillLine>
                <Skill bgColor={"#5445FF"} textColor={"#FFFFFF"}>
                    <DiReact size={"4vh"}/>
                    <SkillText>React</SkillText>
                </Skill>
                <Skill bgColor={"#4d7fff"} textColor={"#FFFFFF"}>
                    <SiRedux size={"3vh"}/>
                    <SkillText>Redux</SkillText>
                </Skill>
            </SkillLine>
            <SkillLine>
                <Skill bgColor={"#53ada4"} textColor={"#FFFFFF"}>
                    <DiJavascript1 size={"4vh"}/>
                    <SkillText>JavaScript</SkillText>
                </Skill>
                <Skill bgColor={"#53ada4"} textColor={"#FFFFFF"}>
                    <SiTypescript size={"3.5vh"}/>
                    <SkillText>TypeScript</SkillText>
                </Skill>
            </SkillLine>
            <SkillLine>
                <Skill bgColor={"#ad5c73"} textColor={"#FFFFFF"}>
                    <SiGraphql size={"3.5vh"}/>
                    <SkillText>GraphQL</SkillText>
                </Skill>
                    <Skill bgColor={"#4d7fff"} textColor={"#FFFFFF"}>
                    <SiApollographql size={"4vh"}/>
                    <SkillText>Apollo</SkillText>
                </Skill>
            </SkillLine>
            <SkillLine>
                <Skill bgColor={"#4d7fff"} textColor={"#FFFFFF"}>
                    <SiGatsby size={"3.5vh"}/>
                    <SkillText>Gatsby</SkillText>
                </Skill>
                <Skill bgColor={"#ad5c73"} textColor={"#FFFFFF"}>
                    <SiNextDotJs size={"3.5vh"}/>
                    <SkillText>Next.js</SkillText>
                </Skill>
            </SkillLine>
            <SkillLine>
                <Skill bgColor={"#4878ad"} textColor={"#FFFFFF"}>
                    <SiJest size={"3.5vh"}/>
                    <SkillText>Jest</SkillText>
                </Skill>
                <Skill bgColor={"#4878ad"} textColor={"#FFFFFF"}>
                    {/*<DiReact size={"4vh"}/>*/}
                    <SkillText>Immutable.js</SkillText>
                </Skill>
            </SkillLine>
            <SkillLine>
                <Skill bgColor={"#e17ed3"} textColor={"#FFFFFF"}>
                    <SiStyledComponents size={"4vh"}/>
                    <SkillText>Styled components</SkillText>
                </Skill>
                <Skill bgColor={"#e17ed3"} textColor={"#FFFFFF"}>
                    <DiSass size={"4vh"}/>
                    <SkillText>CSS / Sass</SkillText>
                </Skill>
            </SkillLine>
        </SkillsWrapper>
    );
};

export default Skills;