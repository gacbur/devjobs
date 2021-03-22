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

