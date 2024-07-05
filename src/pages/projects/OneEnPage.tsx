import styled from "styled-components";

const Container = styled.div`
    margin-left: 1rem;
`;
const OneEnPage = () => {

    return (
        <>
            <h1>PickPick</h1>
            <Container>
                <img src="../pickpick.jpg" onClick={() => {
                    window.open("https://github.com/UMC-2023-2/Back");
                }}/>
                <p>
                    Four-cut photo recording service that dreams of fully preserving precious memories
                </p>
                <h2>planning background</h2>
                <p>
                Instead of mixing precious memories with other photos in the gallery, we started with the slogan and purpose of "Let's preserve precious memories intact."
                Have you ever taken a four-cut photo?
                    <br /><br />
                    <b>There are so many unnecessary depth to go through!</b>
                    <ul>Camera - QR recognition - (Save: Save to "File") - (File-Gallery) - Import to App</ul>
                    <b>Where's the picture of you I'm looking for?</b>
                    <ul>Difficult to find when you need or want to see a photo after moving it to the gallery and mixing it with another photo</ul>
                    <b>I only want to save the pictures I want to post...</b>
                    <ul>If you want to save only a specific cut out of many cuts, if you cut it in edit mode, the frame will also be cut</ul>
                </p>
                <h2>Function</h2>
                <p>
                    <b>Accurate Frame TRIM</b>
                    <ul>When you select a frame, you can cut a picture in the selected location and save and record only that picture individually</ul>
                    <b>Let's just collect four pictures</b>
                    <ul>Unlike in the past, when it was left mixed with other photos in the gallery, the function of collecting and checking only four cut photos and conveniently finding them with the keywords entered when recording</ul>
                    <b>Reduce the photo saving process</b>
                    <ul>It is automatically saved without any additional save action, and all recognized photos can be viewed and recorded again</ul>
                </p>
            </Container>
        </>
    );
};

export default OneEnPage;