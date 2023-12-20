import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutPage from "../AboutPage/AboutPage";
import Projects from "../../components/Projects/Projects";
import ResumePage from "../ResumePage/ResumePage";
import Navbar from "../../components/Navbar/Navbar";

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
// #282A36
//     background: rgba(82,74,164,1);

const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <Navbar />
            <HolyGrailBody>
                <ContentContainer>
                    <AboutPage />
                    <Projects />
                    <ResumePage />
                </ContentContainer>
            </HolyGrailBody>
            <Footer />
        </HomePageContainer>
    );
};

export default HomePage;
