import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AboutPage from '../AboutPage/AboutPage';
import Projects from '../../components/Projects/Projects';
import ResumePage from '../ResumePage/ResumePage';
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';

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
    background: rgba(36,42,85,0.5);
`;

const ContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const NavbarContainer = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const NavUl = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const ListItem = styled.li`
    list-style: none;
    font-size: 1rem;
    color: #000;
    margin: 0 auto;
`;

// const Navbar = ({styling}) => {
//     const scrollToTop = () => {
//         scroll.scrollToTop();
//     };

//     return (
//         <NavbarContainer>
//             <img
//                 src={logo}
//                 alt="logo"
//                 width="50"
//                 onClick={scrollToTop} // https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
//             />
//             <NavUl>
//                 <ListItem>
//                     <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
//                         Home
//                     </Link>
//                 </ListItem>
//                 <ListItem>
//                     <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
//                         About
//                     </Link>
//                 </ListItem>
//                 <ListItem>
//                     <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
//                         Projects
//                     </Link>
//                 </ListItem>
//                 <ListItem>
//                     <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>
//                         Resume
//                     </Link>
//                 </ListItem>
//             </NavUl>
//         </NavbarContainer>
//     );
// };

// export default Navbar;


// #282A36
//     background: rgba(82,74,164,1);


const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <HolyGrailBody>
                <ContentContainer>
                    <Section name="home" id="section1" element="section1">
                        <AboutPage />
                    </Section>
                    <Section name="projects" id="section2" element="section2">
                        <Projects />
                    </Section>
                    <Section name="resume" id="section3">
                        <ResumePage />
                    </Section>
                </ContentContainer>
            </HolyGrailBody>
            <Footer />
        </HomePageContainer>
    );
}

export default HomePage;