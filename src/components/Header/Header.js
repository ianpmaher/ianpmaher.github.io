import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
`;

const HeaderText = styled.h1`
    font-size: 2.5rem;
    margin: 0.5rem auto auto auto;
    letter-spacing: 0.1rem;
    font-family: "Merriweather", serif;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 2rem;
        letter-spacing: auto;
    }
`;

//font-family: 'Crimson Text', serif;

const Header = () => {
    return (
        <HeaderContainer id="home">
            <HeaderText>Ian Maher</HeaderText>
        </HeaderContainer>
    );
};

export default Header;
