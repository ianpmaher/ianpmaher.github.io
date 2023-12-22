import styled from "styled-components";
import Contact from "../Contact/Contact";
import Card from "@mui/material/Card";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
`;

const HeaderText = styled.h1`
    font-size: 2.5rem;
    margin: 0;
    letter-spacing: 0.1rem;
    font-family: "Merriweather", serif;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 1.25rem;
        letter-spacing: auto;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: baseline;
`;

//font-family: 'Crimson Text', serif;

const Header = () => {
    return (
        <HeaderContainer id="home">
            <Card
                sx={{
                    bgcolor: "transparent",
                    p: "0 1rem",
                    borderRadius: "20px",
                }}
            >
                <HeaderText>Ian Maher</HeaderText>
            </Card>
        </HeaderContainer>
    );
};

export default Header;
