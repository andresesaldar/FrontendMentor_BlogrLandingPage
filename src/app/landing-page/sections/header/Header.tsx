import React, { FC } from 'react';
import styled from 'styled-components';
import { OutlineButton, PrimaryButton } from '../../../components/buttons/Buttons';
import { Menu } from '../../../components/menu/Menu';

const HeaderContainer = styled.header`
    padding-top: 3rem;
    padding-bottom: 6rem;
    padding-left: 6rem;
    padding-right: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    border-bottom-left-radius: 5rem;
`;

const Title = styled.h1`
    margin-top: 5rem;
    font-size: 2.5em !important;
`;

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <Menu></Menu>
            <Title className="text-white mb-1">A modern publishing platform</Title>
            <p className="text-white mb-2">Grow your audience and build your online brand</p>
            <div>
                <PrimaryButton className="me-1">Start for Free</PrimaryButton>
                <OutlineButton>Learn More</OutlineButton>
            </div>
        </HeaderContainer>
    );
};
