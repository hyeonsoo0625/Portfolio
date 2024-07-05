import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProjectImg = styled.img`

`;
const ProjectKo = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>프로젝트</h1>
        <ul>
            <h3>찍찍이</h3>
            <ProjectImg src="./pickpick.jpg" onClick={() => {navigate("/project/1")}} />
            <h3>ChatClips</h3>
            <ProjectImg src="./chatclips.png" onClick={() => {navigate("/project/2")}} />
            <h3>이슈관리시스템</h3>
            <ProjectImg src="./issue.png" onClick={() => {navigate("/project/3")}} />
        </ul>
        </div>
    );
};

export default ProjectKo;