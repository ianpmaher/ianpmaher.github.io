import styled from "styled-components";
import Contact from "../Contact/Contact";
import Box from '@mui/material/Box';
import Navbar from "../Navbar/Navbar";


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin: 1rem auto;
`;

const HeaderText = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin: 0.2rem 0;
    letter-spacing: 0.1rem;
    font-family: 'Merriweather', serif;
    @media (max-width: 768px) {
        font-size: 1.25rem;
        letter-spacing: auto;
    }
`;
//font-family: 'Crimson Text', serif;

const Header = () => {
    return (
        <HeaderContainer>
            <Box sx={{boxShadow: "19", p: "0 1rem", borderRadius: "20px", bgcolor: "#a4f"}}>
                <HeaderText>Ian Maher</HeaderText>
            </Box>
            <Contact />
            <Navbar />
        </HeaderContainer>
    );
}

export default Header;