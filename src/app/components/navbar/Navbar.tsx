import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { NavbarContext } from '../../context/NavbarProvider';
import { PrimaryButton, RaisedButton } from '../buttons/Buttons';

const Item = styled.a`
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const SubItem = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    &:hover {
        font-weight: bold;
    }
`;

const ItemContainer = styled.div`
    position: relative;
    margin-right: 2.5rem;
`;

const ItemsContainer = styled.div`
    display: flex;
`;

const SubItemsContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    left: -0.5rem;
    padding: 0.7rem 0.7rem 0.3rem 0.8rem;
    min-width: 80px;
    border-radius: 5px;
    background: white;
    display: flex;
    flex-direction: column;
`;

const NavbarLayout = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Navbar: FC = () => {
    const items = useContext(NavbarContext);
    const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
    const changeActiveItem = (name: string) => {
        if (name === activeItem) {
            setActiveItem(undefined);
            return;
        }
        setActiveItem(name);
    };
    return (
        <NavbarLayout className="w-100">
            <ItemsContainer>
                {items.map(({ name, subItems, href }) => (
                    <ItemContainer key={name} onClick={() => changeActiveItem(name)}>
                        <Item href={href}>{name}</Item>
                        {subItems && subItems.length > 0 && activeItem === name ? (
                            <SubItemsContainer className="shadow">
                                {subItems.map(({ name: subItemName, href: subItemHref }) => (
                                    <SubItem key={subItemName} href={subItemHref}>
                                        {subItemName}
                                    </SubItem>
                                ))}
                            </SubItemsContainer>
                        ) : null}
                    </ItemContainer>
                ))}
            </ItemsContainer>
            <div>
                <RaisedButton className="me-1">Login</RaisedButton>
                <PrimaryButton>Sign Up</PrimaryButton>
            </div>
        </NavbarLayout>
    );
};
