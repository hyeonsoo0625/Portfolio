import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { useLanguageState } from "../shared/hooks/useLanguageState";
import styled from 'styled-components';


const SideBarWrap = styled.div`

    z-index: 5;
    padding: 12px;
    border-radius: 15px 0 0 15px;
    background-color: #e7e4e1;
    height: 100%;
    width: 50%;
    right: -80%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;
    &.open {
        right: 0;
        transition: 0.5s ease;
    }
`;
const SideMenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
`;

const SideMenu = styled.div`
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(to right, black, #e7e4e1);
    border-image-slice: 1;
    display: flex;
    font-weight: bold;
    padding-top: 1.1rem;
    padding-left: 1rem;
    width: 100%;
    height: 2.5rem;
    margin-bottom: 1rem;
    background-color: #e7e4e1;
`;
const Close = styled(IoIosClose)`
    width: 2rem;
    height: 2rem;
`;
const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) => {
    const languageType = useLanguageState(
        (state) => state.languageType
    );
    const outside = useRef<any>();
    const navigate = useNavigate();
    useEffect(() => {
        document.addEventListener('mousedown', handlerOutside);
        return () => {
            document.removeEventListener('mousedown', handlerOutside);
        };
    });
    const handlerOutside = (e: any) => {
        if(!outside.current.contains(e.target)) {
            toggleSide();
        }
    };

    const toggleSide = () => {
        setIsOpen(false);
    };

    return (
        <SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
            <Close onClick={toggleSide} onKeyDown={toggleSide} />
            <SideMenuContainer>
                <SideMenu onClick={() => {toggleSide(); navigate("/project")}}>{languageType === "ko" ? "프로젝트" : "PROJECT"}</SideMenu>
                <SideMenu onClick={() => {toggleSide(); navigate("/experience")}}>{languageType === "ko" ? "경험" : "EXPERIENCE"}</SideMenu>
                <SideMenu onClick={() => {toggleSide(); navigate("/education")}}>{languageType === "ko" ? "교육" : "EDUCATION"}</SideMenu>
            </SideMenuContainer>
        </SideBarWrap>
    );
};
export default Sidebar;