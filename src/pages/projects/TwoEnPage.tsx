import styled from "styled-components";

const Container = styled.div`
    margin-left: 1rem;
`;

const TwoEnPage = () => {

    return (
        <>
            <h1>ChatClips</h1>
            <Container>
                <img src="../chatclips.png" onClick={() => {
                    window.open("https://github.com/Chat-Clips/Back");
                }}/>
                <p>
                    post-meeting chat summary service
                </p>
                <h2>planning background</h2>
                <p>
                    Isn't there a time when you want to check the overall or previous content of the chat after the meeting?  
                </p>
                <h2>Function</h2>
                <p>
                    <b>Web Socket Using STOMP Protocol</b>
                    <ul>Smooth chat by implementing a web socket using the STOMP protocol method</ul>
                    <b>Conference Summary Using Chat GPT API</b>
                    <ul>Use Chat GPT API to implement more accurate chat summary capabilities</ul>                
                </p>
            </Container>
        </>
    )
};
export default TwoEnPage;