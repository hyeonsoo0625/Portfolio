import React from 'react';
import styled from 'styled-components';

import { useLanguageState } from "../shared/hooks/useLanguageState";

const LanguageList = styled.ul`
    display: flex;
    justify-content: center;
`;
const Language = styled.li<{ active: boolean }>`
    display: flex;
    font-size: 1.2rem;
    margin: 0 1rem;
    font-weight: ${(props) => props.active ? 'bold' : 'medium'};
    text-decoration: ${(props) => props.active ? 'underline' : 'none'};
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
const Container = styled.div`
    padding: 1rem;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    position : relative;
    transform : translateY(100%);
`
const Github = styled.div`
    background-image: url(./github.png);
    opacity: 0.5;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    margin: 1rem 1rem 1rem 1rem;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    
}
`;

const Tistory = styled.div`
    background-image: url(./tistory.png);
    opacity: 0.5;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 1rem 1rem 1rem 0.1rem;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    
}
`;

const Embed = styled.div`
    display: flex;
`;
const Footer = () => {
    const languageType = useLanguageState(
        (state) => state.languageType
    );
    const setLanguage = useLanguageState((state) => state.setLanguage);
    return (
        <Container>
            <LanguageList>
                <Language onClick={() => setLanguage({languageType:"ko"})} active={languageType === "ko"}>한국어</Language>
                <Language onClick={() => setLanguage({languageType:"en"})} active={languageType === "en"}>English</Language>
            </LanguageList>
            <Embed>
                <Github onClick={() => {window.open("https://github.com/hyeonsoo0625")}} />
                <Tistory onClick={() => {window.open("https://aihs.tistory.com")}} />
            </Embed>
        </Container>
    );
};

export default Footer;