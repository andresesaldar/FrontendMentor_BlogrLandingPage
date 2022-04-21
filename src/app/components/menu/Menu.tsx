import React, { FC } from 'react';
import styled from 'styled-components';
import { Logo } from '../logo/Logo';
import { Navbar } from '../navbar/Navbar';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items. center;
    justify-content: start;
    flex-grow: 0;
`;

const LogoContainer = styled.div`
    margin-right: 3.5rem;
`;

export const Menu: FC = () => {
    return (
        <MenuContainer className="w-100">
            <LogoContainer>
                <Logo></Logo>
            </LogoContainer>
            <Navbar></Navbar>
        </MenuContainer>
    );
};
