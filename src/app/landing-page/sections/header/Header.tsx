import React, { FC } from 'react';
import { PrimaryButton } from '../../../components/buttons/Buttons';
import { Menu } from '../../../components/menu/Menu';

export const Header: FC = () => {
    return (
        <header>
            <Menu></Menu>
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div>
                <PrimaryButton>Start for Free</PrimaryButton>
                <PrimaryButton>Learn More</PrimaryButton>
            </div>
        </header>
    );
};
