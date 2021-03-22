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
            transform: scale(1.04)
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
        width:270px;
        height:190px;
        margin:.3em .0em;
    }

    @media all and (max-width:640px){
        width:350px;
        height:210px;
        margin:.3em .0em;
    }
`

export const JobElDateP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    transition:.3s;
`
export const JobElEmploymentP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    margin-top:.3em;
    transition:.3s;
`
export const JobElTitleH3 = styled.h3`
    color: ${props => props.theme.TextColorMain};
    font-size:17px;
    margin-top:.7em;
    flex-grow:1;
    transition:.3s;
`
export const JobElCompanyP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    transition:.3s;
`
export const JobElLocationH6 = styled.h6`
    color: #3470a8;
    margin-top:.5em;
    font-size:13px;
    transition:.3s;
`