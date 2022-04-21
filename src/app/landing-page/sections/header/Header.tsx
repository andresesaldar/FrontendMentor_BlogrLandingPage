import React, { FC } from 'react';
import styled from 'styled-components';
import { OutlineButton, PrimaryButton } from '../../../components/buttons/Buttons';
import { Menu } from '../../../components/menu/Menu';
import BgPatternIntroDesktop from '../../../../assets/images/bg-pattern-intro-desktop.svg';

const HeaderContainer = styled.header`
    padding-top: 3rem;
    padding-bottom: 9rem;
    padding-left: 9rem;
    padding-right: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${BgPatternIntroDesktop}), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    background-size: 230%, cover;
    background-position: center left -470px, left top;
    background-repeat: no-repeat;
    border-bottom-left-radius: 5rem;
`;

const Title = styled.h1`
    margin-top: 8rem;
    font-size: 3.5em !important;
`;

const Subtitle = styled.p`
    font-size: 1.2em !important;
`;

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <Menu></Menu>
            <Title className="text-white mb-1">A modern publishing platform</Title>
            <Subtitle className="text-white mb-2 opacity-60">Grow your audience and build your online brand</Subtitle>
            <div>
                <PrimaryButton className="me-1">Start for Free</PrimaryButton>
                <OutlineButton>Learn More</OutlineButton>
            </div>
        </HeaderContainer>
    );
};
