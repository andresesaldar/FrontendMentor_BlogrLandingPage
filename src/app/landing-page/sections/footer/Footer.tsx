import React, { FC } from 'react';
import { Logo } from '../../../components/logo/Logo';

export const Footer: FC = () => {
    return (
        <footer>
            <Logo></Logo>
            <div>
                <h5>Product</h5>
                <a>Overview</a>
                <a>Pricing</a>
                <a>Marketplace</a>
                <a>Features</a>
                <a>Integrations</a>
            </div>
            <div>
                <h5>Company</h5>
                <a>About</a>
                <a>Team</a>
                <a>Blog</a>
                <a>Careers</a>
            </div>
            <div>
                <h5>Connect</h5>
                <a>Contact</a>
                <a>Newsletter</a>
                <a>LinkedIn</a>
            </div>
        </footer>
    );
};
