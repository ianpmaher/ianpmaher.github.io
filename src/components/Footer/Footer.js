import styled from "styled-components";
import Contact from "../Contact/Contact";

const FooterContainer = styled.footer`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    padding: 0.5rem auto;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Contact />
        </FooterContainer>
    );
};

export default Footer;
