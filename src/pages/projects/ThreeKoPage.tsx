import styled from "styled-components";

const Container = styled.div`
    margin-left: 1rem;
`;
const ThreeKoPage = () => {

    return (
        <>
            <h1>이슈관리시스템</h1>
            <Container>
                <img src="../issue.png" onClick={() => {
                    window.open("https://github.com/sw-engineering-teamproject");
                }}/>
                <p>
                    이슈를 관리하고 보수하는 시스템
                </p>
                <h2>기획 배경</h2>
                <p>
                    사람들과 팀플을 하면서 이슈를 생성하고 관리하는 과정에서 불편함을 해결
                </p>
                <h2>기능</h2>
                <p>
                    <b>권한 별 수행</b>
                    <ul>유저의 권한 별로 assign이나 priority 변경 등 수행 환경 다름</ul>
                    <b>assignee 추천</b>
                    <ul>이슈 내용을 기반으로 assignee를 추천하는 머신러닝 알고리즘</ul>
                </p>
            </Container>
        </>
    );
};

export default ThreeKoPage;