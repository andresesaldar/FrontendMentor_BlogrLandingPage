import React, { FC } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../buttons/Buttons';

const NavbarItem = styled.a``;

export const Navbar: FC = () => {
    return (
        <nav>
            <div>
                <div>
                    <NavbarItem>Product</NavbarItem>
                    <div>
                        <NavbarItem>Overview</NavbarItem>
                        <NavbarItem>Pricing</NavbarItem>
                        <NavbarItem>Marketplace</NavbarItem>
                        <NavbarItem>Features</NavbarItem>
                        <NavbarItem>Integrations</NavbarItem>
                    </div>
                </div>
                <div>
                    <NavbarItem>Company</NavbarItem>
                    <div>
                        <NavbarItem>About</NavbarItem>
                        <NavbarItem>Team</NavbarItem>
                        <NavbarItem>Blog</NavbarItem>
                        <NavbarItem>Careers</NavbarItem>
                    </div>
                </div>
                <div>
                    <NavbarItem>Connect</NavbarItem>
                    <div>
                        <NavbarItem>Contact</NavbarItem>
                        <NavbarItem>Newsletter</NavbarItem>
                        <NavbarItem>Linkedin</NavbarItem>
                    </div>
                </div>
            </div>
            <div>
                <PrimaryButton>Login</PrimaryButton>
                <PrimaryButton>Sign Up</PrimaryButton>
            </div>
        </nav>
    );
};
