import styled from "styled-components";
import Contact from "../Contact/Contact";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: 0 auto 1rem auto;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Contact />
        </FooterContainer>
    );
}

export default Footer;