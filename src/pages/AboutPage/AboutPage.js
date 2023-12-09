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
    font-size: 1rem;
    margin: 0 auto;
    padding: 0rem auto;
    color: #000;
`;

const TextBackground = styled.div`
    background-color: #fff;
    opacity: 1;
    border-radius: 5px;
    padding: 1rem 2rem;
    max-width: 50%;
    margin: 0 auto;
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
                    Hi! I'm a software with a background in education and a passion for learning. I'm a graduate of General Assembly's Software Engineering Immersive Bootcamp. I'm a team player with a passion for learning and a drive to succeed.
                </AboutPageText>
            </TextBackground>
            <GridIcons />
        </AboutPageContainer>
    );
}

export default AboutPage;