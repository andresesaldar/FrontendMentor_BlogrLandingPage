import React, { FC } from 'react';
import { Features } from './sections/features/Features';
import { Footer } from './sections/footer/Footer';
import { Header } from './sections/header/Header';
import { Introduction } from './sections/introduction/Introduction';
import { Summary } from './sections/summary/Summary';

export const LandingPage: FC = () => {
    return (
        <>
            <Header></Header>
            <Introduction></Introduction>
            <Summary></Summary>
            <Features></Features>
            <Footer></Footer>
        </>
    );
};
