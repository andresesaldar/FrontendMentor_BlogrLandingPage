import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border-radius: 30px;
    padding: 0.6rem 1rem;
    font-weight: bold;
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
    border-radius: 30px;
    padding: 0.6rem 1rem;
    font-weight: bold;
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
    border-radius: 30px;
    padding: 0.6rem 1rem;
    font-weight: bold;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`;
