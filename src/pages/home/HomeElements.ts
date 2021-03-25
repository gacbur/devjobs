import styled from 'styled-components'

export const HomeCnt = styled.div`
    width:90%;
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-bottom:4em;
`

export const Search = styled.form`
    transition: .3s;
    height:fit-content;
    margin-bottom:1em;
    width:100%;
    max-width:1000px;
    display:flex;
    flex-direction:column;
    
        @media all and (max-width: 600px){
            height:fit-content;
            flex-direction:column;
        }
    `

export const SearchInputsCnt = styled.div`
        background-color: ${props => props.theme.elementsBackgroundColor};
        border-radius:10px;
        padding:.3em .5em;
        box-shadow: 0 2px 8px rgba(0,0,0,.2);
        width:100%;
        height:fit-content;
        display:flex;
        align-items:center;
        justify-content:center;

        @media all and (max-width: 600px){
            flex-direction:column;
        }
    `

export const SearchButton = styled.button`
    cursor:pointer;
    color: ${props => props.theme.TextColorMain};
    background-color: #234f94;
    transition:.3s;
    padding:1.2em 3em;
    border:none;
    flex-grow:1;
    width:150px;
    border-radius:6px;
    color: white;
    margin:2.5em auto 7em auto;

    box-shadow:0 2px 8px rgba(0,0,0,.3);
        
    &:hover{
        background-color: #1d4079;
        transition:.3s;
    }
`

export const InputCnt = styled.div`
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left: solid 1px ${props => props.theme.elementsBorder};
    flex-wrap:wrap;

    &:nth-child(1){
        width:40%;
        border-left: none;
    }

    &:nth-child(2){
        width:40%;
    }

    &:nth-child(3){
        width:20%;
    }

    @media all and (max-width: 600px){
            width:100%;
            border-left:none;
            border-bottom: solid 1px ${props => props.theme.elementsBorder};
            margin:0em 0em .5em 0em;

            &:nth-child(1){
                width:100%;
                border-left: none;
            }

            &:nth-child(2){
                width:100%;
            }

            &:nth-child(3){
                width:100%;
                
                border-bottom: none;
            }
        }

    label{
        color: ${props => props.theme.TextColorMain};
        font-size:15px;
        margin-left:.5em;
    }
`

export const FilterInput = styled.input`
    position:relative;
    width:95%;
    height:90%;
    padding:.5em;
    border:none;
    background-color: ${props => props.theme.elementsBackgroundColor};
    color: ${props => props.theme.TextColorMain};
    transition: .3s;

    &::placeholder{
        color: ${props => props.theme.TextColorMain};
    }

    @media all and (max-width: 600px){
           padding:1em .5em;
        }

`
export const LocationInput = styled.input`
    width:95%;
    height:90%;
    padding:.5em;
    border:none;
    background-color: ${props => props.theme.elementsBackgroundColor};
    color: ${props => props.theme.TextColorMain};
    transition: .3s;

    &::placeholder{
        color: ${props => props.theme.TextColorMain};
    }

    @media all and (max-width: 600px){
           padding:1em .5em;
        }
`

export const FullTimeCheckbox = styled.input.attrs({
    type: 'checkbox',
    id: 'full-time-checkbox',
    name: "full_time"
})`
    height:20px;
    width:20px;
    margin-left:1em;
    margin-right:.6em;

    @media all and (max-width: 600px){
           margin:.8em .5em;
        }
`


export const JobList = styled.div`
    width:100%;
    padding:2em 0em;
    border-top:1px solid ${props => props.theme.elementsBorder};
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

export const JobsNoResults = styled.h3`
    margin-top:2em;
    padding:2em 0em;
    width:95%;
    max-width:1000px;
    border-top:1px solid ${props => props.theme.elementsBorder};
    display:flex;
    justify-content:center;
    color: ${props => props.theme.TextColorMain};
`