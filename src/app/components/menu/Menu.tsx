import React, { FC } from 'react';
import { Logo } from '../logo/Logo';
import { Navbar } from '../navbar/Navbar';

export const Menu: FC = () => {
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    );
};
