import React from 'react';
import { DefaultTheme } from './components/themes/DefaultTheme';
import { LandingPage } from './landing-page/LandingPage';

function App() {
    return (
        <DefaultTheme>
            <LandingPage></LandingPage>
        </DefaultTheme>
    );
}

export default App;
