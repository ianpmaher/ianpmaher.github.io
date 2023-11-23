import styled from "styled-components";

const Button = styled.button`
    font-size: 1rem;
    min-width: 3rem;
    min-height: 2rem;
    max-width: 5rem;
    font-family: "Roboto Flex", sans-serif;
    padding: 0.25rem;
    color: white;
    border: 2px solid #51A3A3;
    border-radius: 20px;
    background-color: #51A3A3;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    &:hover {
        opacity: 0.8;
        border: 2px solid #75485E;
    }
    &:active {
        background-color: #DFCC74;
    }
    @media (max-width: 768px) {
        font-size: 0.9rem;
        max-width: 5rem;
    }
`

export default Button;