import styled from 'styled-components'

export const JobEl = styled.div`
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
        width:370px;
        height:230px;
    }

    @media all and (max-width:975px){
        width:330px;
        height:210px;
    }

    @media all and (max-width:785px){
        width:285px;
        height:200px;
    }

    @media all and (max-width:675px){
        width:330px;
        height:220px;
        margin:.4em .0em;
    }

    @media all and (max-width:400px){
        width:280px;
        height:195px;
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