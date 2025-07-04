import InfoSection from '../../components/InfoSection';
import { ProjectObjOne, ProjectObjTwo, ProjectObjThree, ProjectObjFour, ProjectObjPaper, ProjectObjSkiTour } from '../../components/InfoSection/Data';
import {ProjectContainer, ProjectWrapper, ProjectH1, InfoWrapper} from './ProjectElements';

const Projects = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectWrapper>

                <ProjectH1>Projects</ProjectH1>

                <InfoWrapper>
                    <InfoSection {...ProjectObjSkiTour}/>
                </InfoWrapper>

                <InfoWrapper>
                    <InfoSection {...ProjectObjPaper}/>
                </InfoWrapper>

                <InfoWrapper>
                    <InfoSection {...ProjectObjOne}/>
                </InfoWrapper>

                <InfoWrapper>
                    <InfoSection {...ProjectObjFour}/>
                </InfoWrapper>

                <InfoWrapper>
                    <InfoSection {...ProjectObjTwo}/>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoSection {...ProjectObjThree}/>
                </InfoWrapper>
            </ProjectWrapper>
        </ProjectContainer>
    );
};

export default Projects;
