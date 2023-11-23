import Resume from '../../components/Resume/Resume';
import styled from 'styled-components';

const ResumePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80vw;
    margin: 0 auto;
`


const ResumePage = () => {
    return (
        <ResumePageContainer>
            <Resume />
        </ResumePageContainer>
    );
}

export default ResumePage;