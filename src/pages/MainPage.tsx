import styled from "styled-components";
import { useEffect } from "react";
import MyInfoKo from "../components/MyInfoKo";
import MyInfoEn from "../components/MyInfoEn";
import { useLanguageState } from "../shared/hooks/useLanguageState";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 1rem 1rem 1rem;
    border-radius: 10px;
`;

const Button = styled.div`
    text-decoration: none;
    color: white;
    width: 10rem;
    height: 2rem;
    padding-top: 0.3rem;
    margin-left: 2rem;
    text-align: center;
    background-color: black;
    border-radius: 5px;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        width: 6rem;
}
`;
const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #f0f0f0;
    margin: 0rem 1rem 1rem 1rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 10px;
    border-top-left-radius: 0px;
`;
const Stack = styled.div`
    font-size: 1.5rem;
    background-color: black;
    font-weight: semi-bold;
    width: 8rem;
    height: 3rem;
    text-align: center;
    border-radius: 8px;
    color: white;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    @media (max-width: 768px) {
        font-size: 1rem;
        width: 5rem;
        height: 2rem;
}
`;
const TechStackTitle = styled.div`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0rem 0rem 0rem 1rem;
    padding: 0rem 0.5rem 0rem 0.5rem;
    background-color: #f0f0f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;
const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
}
`;
const Profile = styled.img`
    margin-right: 2rem;
    width: 180px;
    height: 180px;
    border-radius: 20%;
    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
    
}
`;

function MainPage() {
    const languageType = useLanguageState(
        (state) => state.languageType
    );
    useEffect(() => {
    }, [languageType]);

    return (
        <>
            <Container>
                {languageType === "ko" ? <MyInfoKo /> : <MyInfoEn />}
                <Profile src="./profile.png" />
            </Container>
            <TechStackTitle>Tech Stack</TechStackTitle>
            <TechContainer>
                <Stack>C</Stack>
                <Stack>C++</Stack>
                <Stack>Python</Stack>
                <Stack>Java</Stack>
                <Stack>JavaScript</Stack>
                <Stack>React</Stack>
                <Stack>Node.js</Stack>
                <Stack>Express</Stack>
                <Stack>MySQL</Stack>
                <Stack>Spring</Stack>
                <Stack>AWS</Stack>
                <Stack>Pytorch</Stack>
            </TechContainer>
            <LinkContainer>
                <Link to="/project">
                    <Button>PROJECT</Button>
                </Link>
                <Link to="/experience">
                    <Button>EXPERIENCE</Button>
                </Link>
                <Link to="education">
                    <Button>EDUCATION</Button>
                </Link>
            </LinkContainer>
        </>
    );
}

export default MainPage;