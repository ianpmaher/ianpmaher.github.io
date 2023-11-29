import styled from 'styled-components';
import Content from '../Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import Sidebar from '../Sidebar/Sidebar';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background: radial-gradient(circle at 100%, rgba(82,84,164,1) 10%, rgba(247,160,130,1) 40%, rgba(178,166,215,1) 55%);
`;

// background: radial-gradient(circle at 100%, rgba(82,84,164,1) 10%, rgba(247,160,130,1) 40%, rgba(178,166,215,1) 55%);
//     background: linear-gradient(40deg, #242A55 0%, #181B38 100%);


// TODO: if this is background of HolyGrailBody, then the background of whole thing could be BLACK
// background: radial-gradient(circle at 100%, rgba(255, 208, 168, 1) 0%, rgba(82,84,164,1) 33%, rgba(247,160,130,1) 66%, rgba(178,166,215,1) 100%);

const HolyGrailBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    border-radius: 20px;
    background: rgba(36,42,85,0.5);
`;
// #282A36
//     background: rgba(82,74,164,1);


const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <HolyGrailBody>
                <Content />
                {/* <Sidebar /> */}
            </HolyGrailBody>
            <Footer />
        </HomePageContainer>
    );
}

export default HomePage;