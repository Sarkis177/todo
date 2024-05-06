import styled, { keyframes } from 'styled-components';

export const SApp = styled.div`
    text-align: center;
`;

export const SInput = styled.input`
    width: 300px;
    height: 25px;
    font-size: 17px;
    border: 2px solid;
    border-radius: 5px;
    margin-right: 10px;
`;

export const SButton = styled.button`
    width: 5%;
    height: 30px;
    border: 2px solid;
    font-size: 17px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: rgb(105, 105, 105);
        color: white;
    }
`;

export const SSmallbtn = styled(SButton)`
    width: 55px;
    font-size: 14px;
    margin-left: 9px;
    border: 1px solid;
`;

export const SButtonShow = styled(SButton)`
    width: 172px;
    font-size: 15px;
    margin: 19px 0 10px 10px;
`;

export const STaskRem = styled.div`
    font-size: 20px;
    margin-bottom: 25px;
`;

export const STodo = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    flex-direction: column;
    align-items: center;
`;

export const STask = styled.p`
    margin: 0px 15px;
    font-size: 25px;
`;

export const SCheckBox = styled.p`
    display: flex;
    align-items: flex-end;
    font-size: 20px;
`;
