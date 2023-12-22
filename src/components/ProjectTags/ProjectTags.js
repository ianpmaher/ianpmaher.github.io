import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 0.1rem;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0 auto;
    @media (max-width: 768px) {
        gap: 0;
    }
`;

const SmallCard = styled.div`
    margin: 0.1rem 0.3rem;
    border-radius: 10px;
    box-shadow: 0 0 3px 1.5px rgba(0, 0, 0, 0.4);
    cursor: default;
    transition: 0.4s all ease-out;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

const SmallCardText = styled.h1`
    font-size: 0.95rem;
    margin: 0.2rem;
    padding: 0.1rem;
    font-weight: bold,
`;

const ProjectTags = (props) => {
    const tagsList = props.tags.map((tag) => 
        <SmallCard key={tag}>
            <SmallCardText>{tag}</SmallCardText>
        </SmallCard>
    );

    return (
        <CardContainer>
            {tagsList}
        </CardContainer>
    );
}

export default ProjectTags;