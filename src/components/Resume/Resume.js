// import { useState } from "react";
import styled from "styled-components";
import resumeList from "./resumeList";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80vw;
    margin: 0 auto;
    font-family: "Klara", sans-serif;
`;

const ResumeHeader = styled.h4`
    font-size: 1.5rem;
    color: #000;
    margin: 0 auto;
    letter-spacing: 0.1rem;
    font-family: "Roboto Serif", serif;
`;

const ResumeListItem = styled.li`
    list-style: none;
    font-size: 1.1rem;
    color: #000;
    margin: 0 auto;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.25rem;
    padding: 1rem;
    place-items: center;
    place-content: center;
    list-style-type: none;
    margin: 0 auto;
    @media (max-width: 768px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        padding: 0 auto;
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
                        sx={{ p: 0.75, boxShadow: 10, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.8)", fontFamily: "JetBrains Mono, monospace", ":hover": { fontSize: "1.1rem", backgroundColor: "black", color: "white" }, transition: "all 0.2s ease-in-out" }}
                    >
                        {skill}
                    </Card>
                ))}
            </GridContainer>
            <p>
                <a
                    href="https://drive.google.com/file/d/13oKE953LCTEGSpENEqnH6HEVO0NNi_HU/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View my resume
                </a>
            </p>
            
            <iframe src="https://drive.google.com/file/d/13oKE953LCTEGSpENEqnH6HEVO0NNi_HU/preview" width="640" height="480" title="Ian Maher Resume"></iframe>
        </ResumeContainer>
    );
};

export default Resume;
