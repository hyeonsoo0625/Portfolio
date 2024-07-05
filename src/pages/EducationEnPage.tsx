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
const Button = styled.button`
    font-size: 1.3rem;
    width: 20rem;
    height: 3rem;
    border-radius: 0.5rem;
    border-width: 0.15rem;
    background-color: lightgreen;
    color: white;
    font-weight: bold;
    margin-left: 4rem;
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
        background-color: green;
    }
    @media (max-width: 768px) {
        font-size: 0.8rem;
        width: 10rem;
        height: 2rem;
        border-width: 0.1rem;
}
`;

const EducationEnPage = () => {
    return (
        <div>
            <Title>EDUCATION</Title>
            <ul>
                <List>Senior year of software department at Chung-Ang University</List>
                <List>GPA: 3.85/4.5</List>
                <List>PS</List>
                <Button onClick={() => {window.open("https://solved.ac/profile/hyeonsoo2002")}}>SOLVED.AC</Button>
            </ul>
        </div>
    );
};

export default EducationEnPage;