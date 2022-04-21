import styled from 'styled-components';

const initialStyles = `
    border-radius: 30px;
    padding: 0.8rem 1.2rem;
    font-weight: 700;
    min-width: 110px;
`;

export const PrimaryButton = styled.button`
    ${initialStyles}
    font-family: 'Ubuntu', Open Sans;
    background-color: white;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
    }
`;

export const OutlineButton = styled.button`
    ${initialStyles}
    font-family: 'Ubuntu', Open Sans;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        background-color: white;
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
    }
`;

export const RaisedButton = styled.button`
    ${initialStyles}
    font-family: 'Ubuntu', Open Sans;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`;
