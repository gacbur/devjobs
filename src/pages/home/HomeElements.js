import styled from 'styled-components'


export const HomeCnt = styled.div`
    width:90%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const Search = styled.div`
    background-color:white;
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
outline:1px solid red;
    width:33%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left: 1px solid lightgray;

    &:first-child{
        border-left:none;
    }
`

export const FilterInput = styled.input`
    position:relative;
    width:95%;
    height:90%;
    padding:.5em;
    border:none;
`

export const LocationInput = styled.input`
    width:95%;
    height:90%;
    padding:.5em;
    border:none;
`
