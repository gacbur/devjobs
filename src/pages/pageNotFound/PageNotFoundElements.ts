import styled from 'styled-components'

export const PageNotFoundWrapper = styled.div`
    width:90%;
    max-width:1000px;
    padding:2em 0em;
`

export const GoBack = styled.div`
    width:100%;
`
export const GoBackBtn = styled.button`
    cursor:pointer;
    background-color: #234f94;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    width:100px;
    height:50px;
    transition:.3s;

    &:hover{
        background-color: #1d4079;
        transition:.3s;
    }

    .arrow{
        font-size:23px;
        color: white;
    }
`

export const MessageCnt = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:1em;
    padding:2em 0em;
    border-bottom:1px solid ${props => props.theme.TextColorMain};
`

export const MessageH4 = styled.h4`
    font-size:18px;
    color: ${props => props.theme.TextColorMain};
`