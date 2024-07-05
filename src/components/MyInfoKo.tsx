import styled from "styled-components";


const Container = styled.div`
    background-color: #f0f0f0;
    width: 100%;
    display: flex;
    justify-content: space-between;
        padding: 1rem;
    margin-right: 1.5rem;
    border-radius: 10px;
`;
const Description = styled.div`
`;
const StyledH1 = styled.h1`
    font-size: 3.5rem;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
}
`;

const StyledPhara = styled.p`
    font-size: 1.3rem;
    margin-left: 2rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
}
`;
const Job = styled.p`
    margin-left: 2rem;
    margin-top: 0rem;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 0.6rem;
}
`;


const MyInfoKo = () => {
    return (
        <Container>
            <Description>
                <StyledH1>김현수</StyledH1>
                <Job>소프트웨어 엔지니어</Job>
                <StyledPhara>
                    항상 배우고 성장하는 개발자 입니다.
                </StyledPhara>
            </Description>
        </Container>
    );
};

export default MyInfoKo;