import React, { FC, useState } from 'react';
import { NavbarContext, NavbarItem, NavbarItems } from '../context/NavbarProvider';
import { Features } from './sections/features/Features';
import { Footer } from './sections/footer/Footer';
import { Header } from './sections/header/Header';
import { Introduction } from './sections/introduction/Introduction';
import { Summary } from './sections/summary/Summary';

export const LandingPage: FC = () => {
    const [navbarItems] = useState<NavbarItem[]>(NavbarItems);
    return (
        <NavbarContext.Provider value={navbarItems}>
            <Header></Header>
            <Introduction></Introduction>
            <Summary></Summary>
            <Features></Features>
            <Footer></Footer>
        </NavbarContext.Provider>
    );
};
