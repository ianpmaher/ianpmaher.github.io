import styled from "styled-components";
import GridIcons from "../../components/GridIcons/GridIcons";
import { Link } from "react-scroll";
import { Card } from "@mui/material";

const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    margin: auto auto 0.5rem auto;
    padding: 0.5rem;
    font-family: "Karla", sans-serif;
`;
const AboutPageHeader = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin: 0 auto;
    letter-spacing: 0.1rem;
    @media (max-width: 768px) {
        font-size: 1.25rem;
        letter-spacing: auto;
    }
`;

const AboutPageText = styled.p`
    font-size: 1.15rem;
    margin: 0 auto;
    padding: 0rem auto;
`;

const TextBackground = styled.div`
    background-color: black;
    opacity: 1;
    border-radius: 10px;
    padding: 1rem;
    max-width: 85%;
    margin: 0 auto;
    color: #fff;
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0.5rem 1rem;
    }
`;

const wordsArr = [
    "Full Stack Developer",
    "Front End Designer",
    "Lifelong Learner",
    "Software Engineer",
    "Education Advocate",
    "Experienced Educator",
];

const AboutPage = (props) => {
    return (
        <AboutPageContainer>
            <AboutPageHeader data-aos-once="true" data-aos="fade-up" data-aos-duration="500">
                Full Stack Developer | Education Advocate
            </AboutPageHeader>
            <TextBackground>
                <AboutPageText data-aos-once="true" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    Hi! I'm a software engineer with a background in education and a passion for learning. I'm a
                    graduate of General Assembly's Software Engineering Immersive Bootcamp. I love to find creative
                    solutions for novel problems, individually and especially within a team environment.
                </AboutPageText>
                <Link to="projects" smooth={true} duration={500} offset={-50}>
                    <AboutPageText
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        data-aos-duration="1500"
                    >
                        {/* https://www.radix-ui.com/icons */}
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </AboutPageText>
                </Link>
            </TextBackground>
            <GridIcons />
        </AboutPageContainer>
    );
};

export default AboutPage;
