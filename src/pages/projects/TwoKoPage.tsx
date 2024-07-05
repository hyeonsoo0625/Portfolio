import styled from "styled-components";

const Container = styled.div`
    margin-left: 1rem;
`;

const TwoKoPage = () => {
    return (
        <>
            <h1>ChatClips</h1>
            <Container>
                <img src="../chatclips.png" onClick={() => {
                    window.open("https://github.com/Chat-Clips/Back");
                }}/>
                <p>
                    회의 후 채팅 요약 서비스
                </p>
                <h2>기획 배경</h2>
                <p>
                    회의 후 채팅에 대한 전반적인 내용이나 이전 내용을 확인해 보고 싶을 때가 있지 않으시나요?    
                </p>
                <h2>기능</h2>
                <p>
                    <b>STOMP 프로토콜을 이용한 웹소켓</b>
                    <ul>STOMP 프로토콜 방식을 이용해 웹소켓을 구현하여 원할하게 채팅</ul>
                    <b>Chat GPT API를 이용한 회의 요약</b>
                    <ul>Chat GPT API를 이용하여 보다 더 정확한 채팅 요약 기능 구현</ul>                
                </p>
            </Container>
        </>
    )
};

export default TwoKoPage;