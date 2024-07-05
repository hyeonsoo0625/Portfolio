import styled from "styled-components";


const Title = styled.h1`
    font-size: 3.5rem;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
}
`;
const List = styled.li`
    font-size: 1.3rem;
    margin-left: 3rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
}
`;
const ExperienceEnPage = () => {
    return (
        <div>
            <Title>EXPERIENCE OVERVIEW</Title>
            <ul>
                <List>2018.03 ~ 2021.02&emsp;&emsp;&emsp;Seoul Gangseo High School Graduation</List>
                <List>2022.03 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Department of Software, Chung-Ang University</List>
                <List>2024.04 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;CLUG Vice Chairman, LINUX/UNIX Club, Chung-Ang University</List>
                <List>2023.09 ~ 2024.02&emsp;&emsp;&emsp;UMC 5th Server part completed</List>
                <List>2024.03 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;UMC 6th Web Part</List>
                <List>2024.03 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;CUAI, the Society of Artificial Intelligence, Chung-Ang University</List>
            </ul>
        </div>
    );
};

export default ExperienceEnPage