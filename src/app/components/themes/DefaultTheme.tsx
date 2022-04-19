import React, { FC, PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const defaultTheme = {
    font: {
        family: {
            secondary: "'Ubuntu', sans-serif",
            primary: "'Overpass', sans-serif",
        },
        size: {
            sm: '13px',
            default: '14px',
            lg: '15px',
            xl: '16px',
        },
    },
    screen: {
        size: {
            sm: '576px',
            lg: '992px',
            xl: '1200px',
        },
    },
    colors: {
        dark: 'hsl(208, 49%, 24%)', // Very dark blue (headings)
        primary: 'hsl(207, 13%, 34%)', //Very dark grayish blue (body copy)
        secondary: 'hsl(356, 100%, 66%)', //Light red (CTA text)
        light: 'hsl(355, 100%, 74%)', //Very light red (CTA hover background)
        white: 'hsl(0, 0%, 100%)', // White (text)
        primaryLight: 'hsl(240, 2%, 79%)', // Grayish blue (footer text)
        primaryDark: 'hsl(240, 10%, 16%)', //Very dark black blue (footer background)
    },
};

const Container = styled.div`
    h1 {
        font-size: 2em !important;
    }

    h2 {
        font-size: 1.75em !important;
    }

    h3 {
        font-size: 1.5em !important;
    }

    h4 {
        font-size: 1.25em !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ theme }) => theme.font.family.primary};
        font-weight: 600;
    }

    h5,
    p,
    span {
        font-size: 1em !important;
    }

    h6,
    small {
        font-size: 0.875em !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ theme }) => theme.colors.dark};
    }

    small {
        color: ${({ theme }) => theme.colors.primaryLight};
    }

    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
    overflow: auto;
    height: 100%;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.screen.size.sm}) {
        font-size: ${({ theme }) => theme.font.size.default};
    }
    @media screen and (min-width: ${({ theme }) => theme.screen.size.lg}) {
        font-size: ${({ theme }) => theme.font.size.lg};
    }
    @media screen and (min-width: ${({ theme }) => theme.screen.size.xl}) {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const DefaultTheme: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container>{children}</Container>
        </ThemeProvider>
    );
};
