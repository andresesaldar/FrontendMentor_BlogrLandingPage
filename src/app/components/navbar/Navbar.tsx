import React, { FC, PropsWithChildren, useContext, useState } from 'react';
import styled from 'styled-components';
import { NavbarContext, NavbarItem } from '../../context/NavbarProvider';
import { PrimaryButton } from '../buttons/Buttons';

const itemsLayout = (items: NavbarItem[]) => {
    return items.map(({ name, subItems, href }) => (
        <NavbarItemLayout key={name} href={href} subItems={subItems}>
            {name}
        </NavbarItemLayout>
    ));
};

const Item = styled.a``;

interface NavbarItemLayoutProps {
    href?: string;
    subItems?: NavbarItem[];
}

const NavbarItemLayout: FC<PropsWithChildren<NavbarItemLayoutProps>> = ({ children, href, subItems }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <>
            {subItems && subItems.length > 0 ? (
                <div onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                    <Item href={href}>{children}</Item>
                    {isHovered ? <div>{itemsLayout(subItems)}</div> : null}
                </div>
            ) : (
                <Item href={href}>{children}</Item>
            )}
        </>
    );
};

export const Navbar: FC = () => {
    const items = useContext(NavbarContext);
    return (
        <nav>
            <div>{itemsLayout(items)}</div>
            <div>
                <PrimaryButton>Login</PrimaryButton>
                <PrimaryButton>Sign Up</PrimaryButton>
            </div>
        </nav>
    );
};
