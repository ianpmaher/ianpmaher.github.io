import styled from "styled-components";

const IconCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    max-width: 3rem;
    transition: 0.4s all ease-out;
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 480px) {
        max-width: 1.75rem;
        margin: 0 0.45rem;
    }
    &:hover {
        transform: scale(1.1);
    }
`;

export default IconCard;