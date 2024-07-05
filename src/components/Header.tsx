import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
const Home = styled(IoHome)`
    color: white;
    width: 2rem;
    margin-left: 0.9rem;
    margin-top: 0.02rem;
    height: 3.5rem;
`;
const Menu = styled(IoMenu)`
    color: white;
    width: 2rem;
    margin-right: 0.9rem;
    margin-top: 0.02rem;
    height: 3.5rem;
    @media (min-width: 768px) {
        display: none;
    }
`;
const Container = styled.div`
    display: flex;
    item-align: center;
    background-color: black;
`;
const StyledH1 = styled.h1`
    font-size: 3rem;
    color: red;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0rem;
    margin-bottom: 0.7rem;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 2rem;
}
`;

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSide = () => {
        setIsOpen(true);
    }
    return (
        <header>
            <Container>
                <Home onClick={() => { navigate('/') }} />
                <StyledH1>Portfolio</StyledH1>
                <Menu onClick={toggleSide} />
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </Container>
        </header>
    );
};

export default Header;