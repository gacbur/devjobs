import styled from 'styled-components'

export const PinnedCnt = styled.div`
    margin:3em 0em;
    width:90%;
    max-width:1000px;
`

export const TitleCnt = styled.div`
    padding:1em 4em;
    width:100%;
    border-bottom: 1px solid ${props => props.theme.TextColorSecondary};
`

export const TitleH4 = styled.h4`
    color: ${props => props.theme.TextColorSecondary};
    font-size:15px;
`

export const ItemList = styled.div`
    width:100%;
    padding:2em 0em;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media all and (max-width: 1050px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 680px){
            grid-template-columns: repeat(1, 1fr);
    }
`

export const NoPinnedJobsFound = styled.h3`
    font-size:17px;
    color: ${props => props.theme.TextColorMain};
    display:flex;
    width:100%;
    margin-top:4em;
    justify-content:center;
`

