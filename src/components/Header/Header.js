import styled from "styled-components";
import Contact from "../Contact/Contact";
import Box from '@mui/material/Box';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
    align-items: center;
    position: sticky;
    width: 90vw;
    margin: 0.75rem auto;
`;

const HeaderText = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin: 0.2rem 0;
    letter-spacing: 0.1rem;
    font-family: 'Merriweather', serif;
`;
//font-family: 'Crimson Text', serif;

const Header = () => {
    return (
        <HeaderContainer>
            <Box sx={{boxShadow: "19", p: "0 1rem", borderRadius: "20px", bgcolor: "#a4f"}}>
                <HeaderText>Ian Maher</HeaderText>
            </Box>
            <Contact />
        </HeaderContainer>
    );
}

export default Header;