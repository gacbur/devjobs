import styled from 'styled-components'

export const HomeCnt = styled.div`
    width:90%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const Search = styled.div`
    background-color: ${props => props.theme.elementsBackgroundColor};
    transition: .3s;
    height:4em;
    padding:.5em 1em;
    margin-bottom:4em;
    width:100%;
    max-width:1000px;
    display:flex;
    border-radius:10px;
    box-shadow: 0 2px 8px rgba(0,0,0,.3);
    `

export const InputCnt = styled.div`
    width:33%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left: solid 1px ${props => props.theme.elementsBorder};

    &:first-child{
        border-left: none;
    }
`

export const FilterInput = styled.input`
    position:relative;
    width:95%;
    height:90%;
    padding:.5em;
    border:none;
    background-color: ${props => props.theme.elementsBackgroundColor};
    color: ${props => props.theme.TextColorSecondary};
    transition: .3s;

`

export const LocationInput = styled.input`
    width:95%;
    height:90%;
    padding:.5em;
    border:none;
    background-color: ${props => props.theme.elementsBackgroundColor};
    color: ${props => props.theme.TextColorSecondary};
    transition: .3s;
`

export const FullTimeCheckbox = styled.input.attrs({
    type: 'checkbox',
    id: 'full-time-checkbox'
})`
    height:20px;
    width:20px;
    margin-right:.6em;
`