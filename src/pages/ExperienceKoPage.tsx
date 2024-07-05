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
const ExperienceKoPage = () => {
    return (
        <div>
            <Title>경험</Title>
            <ul>
                <List>2018.03 ~ 2021.02&emsp;&emsp;&emsp;서울강서고등학교 졸업</List>
                <List>2022.03 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;중앙대학교 소프트웨어학부 재학</List>
                <List>2024.04 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;중앙대학교 LINUX/UNIX 동아리 CLUG 부회장</List>
                <List>2023.09 ~ 2024.02&emsp;&emsp;&emsp;UMC 5기 Server 파트 수료</List>
                <List>2024.03 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;UMC 6기 Web 파트</List>
                <List>2024.03 ~&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;중앙대학교 인공지능 학회 CUAI</List>
            </ul>
        </div>
    );
};
export default ExperienceKoPage;