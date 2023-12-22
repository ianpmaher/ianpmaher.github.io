// import { useState } from "react";
import styled from "styled-components";
import resumeList from "./resumeList";
import Card from "@mui/material/Card";
// import IconCard from "../IconCard/IconCard";
// import CardContent from "@mui/material/CardContent";

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
`;

const ResumeHeader = styled.h4`
    font-size: 1.5rem;
    color: #fff;
    margin: 1rem auto;
    letter-spacing: 0.1rem;
    font-family: "Roboto Serif", serif;
`;

const ResumeListItem = styled.p`
    font-size: 1.1rem;
    color: #fff;
    background-color: #21222b;
    padding: 1rem;
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

const StyledCard = styled(Card)`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: "all 0.4s ease-in-out",
`;

const GridContainer2 = styled(GridContainer)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.25rem;
`;

const Resume = () => {
    // declare state variable
    // const [hover, setHover] = useState(false);

    return (
        <ResumeContainer>
            <ResumeHeader>Let's connect!</ResumeHeader>
            <GridContainer2>
                <StyledCard
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <ResumeListItem>
                        I am a creative and process-driven full stack software developer with enthusiasm for building
                        accessible designs and constructing technical solutions with the user in mind.
                    </ResumeListItem>
                </StyledCard>
                <span />
                <span />
                <StyledCard
                    data-aos-once="true"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                >
                    <ResumeListItem>
                        I leverage my professional experience as an educator and guidance counselor to my present work,
                        with a focus on communication and an ability to work with people of all backgrounds.
                    </ResumeListItem>
                </StyledCard>
                <StyledCard
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="2000"
                >
                    <ResumeListItem>
                        I thrive in a collaborative environment and am enthusiastic about projects centered on learning
                        and inclusion.
                    </ResumeListItem>
                </StyledCard>
                <span />
            </GridContainer2>
            {/* <ResumeListItem>{resumeList.brand}</ResumeListItem> */}
            {/* <ResumeHeader>Technical Skills</ResumeHeader>
            <GridContainer>
                {resumeList["Technical Skills"].map((skill) => (
                    <Card
                        key={skill.id}
                        sx={{
                            p: 0.75,
                            boxShadow: 10,
                            borderRadius: "20px",
                            bgcolor: "rgba(255,255,255,0.8)",
                            fontFamily: "JetBrains Mono, monospace",
                            ":hover": { backgroundColor: "black", color: "white" },
                            transition: "all 0.4s ease-in-out",
                            cursor: "default",
                        }}
                    >
                        {skill}
                    </Card>
                ))}
            </GridContainer> */}
            {/* <IconCard style={{transform: "scale(1.5)", backgroundColor: "wheat"}}>
                <a
                    href="https://drive.google.com/file/d/13oKE953LCTEGSpENEqnH6HEVO0NNi_HU/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileDownloadDoneRoundedIcon />
                </a>
            </IconCard> */}

            {/* <iframe src="https://drive.google.com/file/d/13oKE953LCTEGSpENEqnH6HEVO0NNi_HU/preview" width="640" height="480" title="Ian Maher Resume"></iframe> */}
        </ResumeContainer>
    );
};

export default Resume;
