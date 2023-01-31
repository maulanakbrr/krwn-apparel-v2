import styled from "styled-components";

export const ButtonStyle = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 13px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    ${props => props.buttonType === 'google' && `
        background-color: #4285f4;
        color: white;

        &:hover {
        background-color: #357ae8;
        border: none;
        }
    `}

    ${props => props.buttonType === 'inverted' && `
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover {
        background-color: black;
        color: white;
        border: none;
        }
    `}


`