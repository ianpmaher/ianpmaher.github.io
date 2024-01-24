import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutPage from "../AboutPage/AboutPage";
import Projects from "../../components/Projects/Projects";
import ResumePage from "../ResumePage/ResumePage";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import { motion, useScroll } from "framer-motion";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 75%;
    margin: 0 auto;
`;

const HolyGrailBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    border-radius: 20px;
    background: rgba(36, 42, 85, 0.5);
`;

const ContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;
    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const ProgressBar = styled(motion.div)`
    position: fixed;
    top: 1;
    left: 0;
    height: 2rem;
    width: 100%;
    background-color: rgba(223, 134, 152, 0.8);
    z-index: 100;
    transform-origin: top left;
    border-radius: 20px;
    @media (max-width: 768px) {
        width: 3rem;
    }
`;

// #282A36
//     background: rgba(82,74,164,1);

const HomePage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = scrollYProgress;

    return (
        <>
            <ProgressBar style={{ scaleX }} />
            <HomePageContainer>
                <Header />
                <FlexContainer>
                    <Navbar />
                    <Contact />
                </FlexContainer>
                <HolyGrailBody>
                    <ContentContainer>
                        <AboutPage />
                        <Projects />
                        <ResumePage />
                    </ContentContainer>
                </HolyGrailBody>
                <Footer />
            </HomePageContainer>
        </>
    );
};

export default HomePage;
