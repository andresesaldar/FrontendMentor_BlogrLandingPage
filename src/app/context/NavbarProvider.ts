import { createContext } from 'react';

export interface NavbarItem {
    name: string;
    href?: string;
    subItems?: { name: string; href?: string }[];
}

export const NavbarContext = createContext<NavbarItem[]>([]);

export const NavbarItems: NavbarItem[] = [
    {
        name: 'Product',
        href: '#',
        subItems: [
            { name: 'Overview', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Integrations', href: '#' },
        ],
    },
    {
        name: 'Company',
        href: '#',
        subItems: [
            { name: 'About', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' },
        ],
    },
    {
        name: 'Connect',
        href: '#',
        subItems: [
            { name: 'Contact', href: '#' },
            { name: 'Newsletter', href: '#' },
            { name: 'LinkedIn', href: '#' },
        ],
    },
];
