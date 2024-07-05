import styled from "styled-components";

const Container = styled.div`
    margin-left: 1rem;
`;
const ThreeEnPage = () => {

    return (
        <>
            <h1>Issue Management System</h1>
            <Container>
                <img src="../issue.png" onClick={() => {
                    window.open("https://github.com/sw-engineering-teamproject");
                }}/>
                <p>
                Systems to manage and repair issues
                </p>
                <h2>planning background</h2>
                <p>
                Solve inconvenience in creating and managing issues while teaming with people
                </p>
                <h2>Function</h2>
                <p>
                    <b>Perform by permission</b>
                    <ul>Different execution environments such as assign or priority change for each user's authority</ul>
                    <b>Assignee Recommendation</b>
                    <ul>Machine learning algorithm to recommend assignee based on issue content</ul>
                </p>
            </Container>
        </>
    );
};

export default ThreeEnPage;