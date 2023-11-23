import { useState } from "react";
import styled from "styled-components";
import resumeList from "./resumeList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80vw;
    margin: 0 auto;
`;

const ResumeHeader = styled.h4`
    font-size: 1.5rem;
    color: #000;
    margin: 0 auto;
    letter-spacing: 0.1rem;
    font-family: "Roboto Serif", serif;
`;

const ResumeList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ResumeListItem = styled.li`
    list-style: none;
    font-size: 1rem;
    color: #000;
    margin: 0 auto;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
    padding: 1rem;
    place-items: center;
    place-content: center;
    list-style-type: none;
    margin: 0 auto;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Resume = () => {
    // declare state variable
    // const [hover, setHover] = useState(false);

    return (
        <ResumeContainer>
            <ResumeHeader>About Me</ResumeHeader>
            <ResumeListItem>{resumeList.brand}</ResumeListItem>
            <ResumeHeader>Technical Skills</ResumeHeader>
            <GridContainer>
                {resumeList["Technical Skills"].map((skill) => (
                    <Card
                        key={skill}
                        sx={{ p: 1, boxShadow: 10, borderRadius: "20px" }}
                    >
                        {skill}
                    </Card>
                ))}
            </GridContainer>
            <p>
                <a
                    href="https://docs.google.com/document/d/1Bj2ZVZvV1JZ1x5bXn6Dq0Zyf4j3oY2Z9LZJ1p6z4V7k/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View my resume
                </a>
            </p>
        </ResumeContainer>
    );
};

export default Resume;
