import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { NavbarContext } from '../../context/NavbarProvider';
import { PrimaryButton, RaisedButton } from '../buttons/Buttons';
import IconArrowLight from '../../../assets/icons/icon-arrow-light.svg';

const Item = styled.a`
    text-decoration: none;
    opacity: 60%;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        opacity: 100%;
    }
`;

const SubItem = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Ubuntu', Open Sans;
    font-weight: 500;
    margin-bottom: 1rem;
    &:hover {
        font-weight: 700;
    }
`;

const ItemContainer = styled.div`
    position: relative;
    margin-right: 2rem;
`;

const ItemsContainer = styled.div`
    display: flex;
`;

const SubItemsContainer = styled.div`
    position: absolute;
    top: 2.3rem;
    left: -1.5rem;
    padding: 2rem 2.5rem 1rem 1.5rem;
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
                        <Item
                            href={href}
                            className={activeItem === name ? 'opacity-100 text-decoration-underline' : ''}
                        >
                            {name}{' '}
                            <img
                                src={IconArrowLight}
                                alt="Item icon"
                                className={activeItem === name ? 'flip-vertically' : ''}
                            ></img>
                        </Item>
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
                <RaisedButton className="me-1 opacity-60">Login</RaisedButton>
                <PrimaryButton>Sign Up</PrimaryButton>
            </div>
        </NavbarLayout>
    );
};
