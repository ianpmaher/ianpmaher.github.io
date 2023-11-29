import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Button from "../Button/Button";
import IconCard from "../IconCard/IconCard";

const ContactContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;

const ContactUl = styled.ul`
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
`;

const Contact = () => {
    return (
        <ContactContainer>
            <ContactUl>
                <IconCard>
                    <a href="mailto:ianpmaher@gmail.com" target="_blank" rel="noreferrer noopener" title="email">
                        <Button>
                            <EmailSharpIcon aria-label="email" />
                        </Button>
                    </a>
                    {/* <span>ianpmaher@gmail.com</span> */}
                </IconCard>
                <IconCard>
                    <a
                        href="https://www.linkedin.com/in/ianmaher/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="LinkedIn"
                    >
                        <Button>
                            <LinkedInIcon aria-label="LinkedIn" />
                        </Button>
                    </a>
                    {/* <span>linkedin</span> */}
                </IconCard>
                <IconCard>
                    <a
                        href="https://www.linkedin.com/in/ianmaher/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Resume"
                    >
                        <Button>
                            <TextSnippetIcon aria-label="resume" />
                        </Button>
                    </a>
                    {/* <span>resume</span> */}
                </IconCard>
            </ContactUl>
        </ContactContainer>
    );
};

export default Contact;
