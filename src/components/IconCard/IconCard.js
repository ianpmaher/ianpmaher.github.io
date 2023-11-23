import styled from "styled-components";

const IconCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    max-width: 3rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default IconCard;