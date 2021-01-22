import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;

    input, select {
        display: flex;
        width: 200px;
        height: 30px;
        margin-bottom: 20px;
        font-size: 16px;
        flex: 1;
        padding: 2px;
        border: 0;
        color: #232129;
        background-image: url(../images/select-arrow.png), 
        -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
        background-position: center right;
        background-repeat: no-repeat;
        border: 1px solid #AAA;
        font-size: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        appearance: none;
        -webkit-appearance: button;
        -webkit-padding-end: 20px;
        -webkit-padding-start: 2px;
        -webkit-user-select: none;

        &::placeholder {
        color: #807b77;
        font-size: 16px;
        }
    }
`;

export const Image = styled.img`
`;

export const FormContainer = styled.div`
    margin-top: 50px;
`;

export const Label = styled.div`
    margin-bottom: 5px;
    font-size: 16px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 18px;
    color: #312E38;
    margin-top: 25px;
    background-color: #ff9000;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${shade(0.2, '#ff9000')};
    }
`;