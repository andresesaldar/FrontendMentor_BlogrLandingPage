import React, { Children, FC, PropsWithChildren, useContext } from 'react';
import { Logo } from '../../../components/logo/Logo';
import { NavbarContext } from '../../../context/NavbarProvider';

const ItemContainer: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <>{children}</>;
};

export const Footer: FC = () => {
    const items = useContext(NavbarContext);
    return (
        <footer>
            <Logo></Logo>
            <nav>
                <div>
                    {items.map(({ name, subItems }) => (
                        <ItemContainer key={name}>
                            <h5>{name}</h5>
                            <>
                                {subItems && subItems.length > 0
                                    ? subItems.map(({ name: subItemName, href: subItemHref }) => (
                                          <a key={subItemName} href={subItemHref}>
                                              {subItemName}
                                          </a>
                                      ))
                                    : null}
                            </>
                        </ItemContainer>
                    ))}
                </div>
            </nav>
        </footer>
    );
};
