import styled from "styled-components";
import projectsList from "./projectsList";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ProjectTags from "../ProjectTags/ProjectTags";
import Button from "../Button/Button";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const ProjectsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 0.25rem;
    place-items: stretch;
    place-content: center;
    list-style-type: none;
    margin: 0 auto;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0.1rem;
        grid-gap: 0.1rem;
    }
    @media (max-width: 900px) {
        padding: 0.1rem;
        grid-gap: 0.5rem;
    }
`;

const CardStyle = {
    objectFit: "contain",
    transition: "1.5s all ease-out",
    "&:hover": {
        transform: "scale(1.1)",
        boxShadow: 10,
    },
};

const SpaceSpan = styled.span`
    margin: 0 0.25rem;
`;

// styled-components are actually the coolest thing in the world
const StyledButton = styled(Button)`
    min-width: 6rem;
    padding: 0.5rem 0.25rem;
`;

const Projects = (props) => {
    const listItems = projectsList.map((project) => (
        <li key={project.id}>
            <Card sx={{ maxWidth: 600, height: "100%", bgcolor: "", py: 0.5, px: 0, boxShadow: 10 }}>
                <CardMedia component="img" height="450" image={project.image} alt={project.title} sx={CardStyle} />
                <CardContent>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ProjectTags tags={project.tags} />
                    <br />
                    <a href={project.github} aria-label="GitHub" title={project.title} target="__blank" rel="noreferrer noopener">
                        <StyledButton>
                            GitHub
                            <GitHubIcon />
                        </StyledButton>
                    </a>
                    <SpaceSpan />
                    <a href={project.live} aria-label="Live deployment" title={project.title} target="__blank" rel="noreferrer noopener">
                        <StyledButton>
                            Live Site
                            <OpenInNewRoundedIcon />
                        </StyledButton>
                    </a>
                </CardContent>
            </Card>
        </li>
    ));

    return (
        <FlexContainer>
            <ProjectsContainer>{listItems}</ProjectsContainer>
        </FlexContainer>
    );
};

export default Projects;