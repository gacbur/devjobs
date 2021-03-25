import styled from 'styled-components'

export const SearchFilterItemsCnt = styled.div`
    width:100%;
    margin-bottom:3em;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`

export const ResultBlocksCnt = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

export const ResultsBlock = styled.div<{ value?: any }>`
    cursor:pointer;
    color: ${props => props.theme.TextColorMain};
    padding:.7em .9em;
    background-color: ${props => props.theme.elementsBackgroundColor};
    font-size:12px;
    border: 2px solid ${props => props.theme.elementsBorder};
    margin-left:.4em;

    &:hover{
        outline:1px solid ${props => props.theme.elementsBorder};
        outline-offset:-5px;
    }
`

export const ResultsP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:13px;
    margin-bottom:.8em;
`
