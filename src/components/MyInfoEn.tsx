import styled from "styled-components";


const Container = styled.div`
    background-color: #f0f0f0;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
const MyInfoEn = () => {
    return (
        <Container>
            <Description>
                <StyledH1>Kim HyeonSoo</StyledH1>
                <Job>Software Engineer</Job>
                <StyledPhara>
                    I am a developer who always learns and grows.
                </StyledPhara>
            </Description>
        </Container>
    );
};

export default MyInfoEn;