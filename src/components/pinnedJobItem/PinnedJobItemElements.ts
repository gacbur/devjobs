import styled from 'styled-components'

export const PinnedItem = styled.div`
    position: relative;
    background-color: ${props => props.theme.elementsBackgroundColor};
    width: 300px;
    height:200px;
    transition: .3s;
    display:flex;
    flex-direction:column;
    padding:1em .5em;
    margin:.6em .3em;
    font-size: 26px;
    box-shadow: 0 2px 8px rgba(0,0,0,.3);
    border-radius:10px;
    transition:.3s;

        &:hover{
            cursor: pointer;
        }


    @media all and (max-width:1050px){
        width:385px;
        height:220px;
    }

    @media all and (max-width:890px){
        width:340px;
        height:220px;
        margin:.4em .0em;
    }

    @media all and (max-width:780px){
        width:300px;
        height:200px;
        margin:.3em .0em;
    }

    @media all and (max-width:700px){
        width:295px;
        height:190px;
        margin:.3em .0em;
    }

    @media all and (max-width:640px){
        width:350px;
        height:210px;
        margin:.3em .0em;
    }

    @media all and (max-width:450px){
        width:285px;
        height:210px;
        margin:.3em .0em;
    }
`

export const DateP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    transition:.3s;
`
export const EmploymentP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    margin-top:.3em;
    transition:.3s;
`
export const TitleH3 = styled.h3`
    color: ${props => props.theme.TextColorMain};
    font-size:17px;
    margin-top:1.2em;
    flex-grow:1;
    transition:.3s;
`
export const CompanyP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    transition:.3s;
`
export const LocationH6 = styled.h6`
    color: #3470a8;
    margin-top:.5em;
    font-size:13px;
    transition:.3s;
`
export const DeleteBtn = styled.button`
    cursor:pointer;
    position:absolute;
    right:15px;
    top:15px;
    background-color: #234f94;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    width:50px;
    height:50px;
    border-radius:50em;
    transition:.3s;

    &:hover{
        background-color: #1d4079;
        transition:.3s;
    }

    .trash{
        pointer-events: none;
        font-size:25px;
        color:white;
    }

`
