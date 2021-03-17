import styled from 'styled-components'

import { StandardButton } from '../../components/reusable/StandardButton'

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
    margin-bottom:3.5em;
    width:100%;
    max-width:1000px;
    display:flex;
    border-radius:10px;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
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

    label{
        color: ${props => props.theme.TextColorMain};
        font-size:15px;
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
    margin-left:1em;
    margin-right:.6em;
`

export const SearchButton = styled(StandardButton)`
    margin-left:auto;
`

export const LoadMoreBtn = styled(StandardButton)`
    margin-top:3em;
    margin-bottom:7em;
`

export const JobList = styled.div`
    width:100%;
    max-width:1000px;
    min-height:500px;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  
  @media all and (max-width: 1050px) {
      grid-template-columns: repeat(2, auto);
  }
  
  @media all and (max-width: 678px) {
      grid-template-columns: 1fr;
  }
`