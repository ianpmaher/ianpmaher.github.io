import styled from "styled-components";
import GridIcons from "../../components/GridIcons/GridIcons";

const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    margin: auto auto 0.5rem auto;
    padding: 0.5rem;
    font-family: 'Karla', sans-serif;
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
            <AboutPageHeader>Full Stack Developer | Education Advocate</AboutPageHeader>
            <TextBackground>
                <AboutPageText>
                    Hi! I'm a software engineer with a background in education and a passion for learning. I'm a graduate of General Assembly's Software Engineering Immersive Bootcamp. I love to find creative solutions for novel problems, individually and especially within a team environment.
                </AboutPageText>
            </TextBackground>
            <GridIcons />
        </AboutPageContainer>
    );
}

export default AboutPage;