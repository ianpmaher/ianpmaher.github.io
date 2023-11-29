import styled from "styled-components";
import projectsList from "./projectsList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80vw;
`;

const ProjectsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 3rem;
    place-items: center;
    place-content: center;
    list-style-type: none;
    margin: 0 auto;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CardStyle = {
    transition: "1.5s all ease-out",
    "&:hover": {
        transform: "scale(1.1)",
        boxShadow: 10,
    },
}

const SpaceSpan = styled.span`
    margin: 0 0.25rem;
`;

const Projects = (props) => {
    const listItems = projectsList.map((project) => 
        <li key={project.id}>
            <Card sx={{ maxWidth: 500, bgcolor: '', boxShadow: 10 }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={project.image}
                    alt={project.title}
                    sx={CardStyle}
                />
                <CardContent>
                    <h2>{project.title}</h2>
                    {/* project tags somehow */}
                    <p>{project.description}</p>
                    <a href={project.github} title={project.title} target="__blank" rel="noreferrer noopener">GitHub<GitHubIcon/></a>
                    <SpaceSpan/>
                    <a href={project.live} title={project.title} target="__blank" rel="noreferrer noopener">Live Site<OpenInNewRoundedIcon/></a>
                </CardContent>
            </Card>
        </li>
    );

    return (
        <FlexContainer>
            <ProjectsContainer>
                {listItems}
            </ProjectsContainer>
        </FlexContainer>
    );
}

export default Projects;