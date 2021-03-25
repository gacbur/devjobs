import styled from 'styled-components'

export const StyledPaginateContainer = styled.div`

    .pagination {
        width:100%;
        margin-top:2em;
        margin-bottom:6em;
        align-items:center;
        justify-content:center;
        display:flex;
        list-style:none;
        }

    .break-me {
        cursor: pointer;
        margin:0em .2em;
        font-size:19px;
        color: ${props => props.theme.TextColorMain};
        }

    .active {
        background-color: #234f94;
        color:white;

            a{
                color:white;
            }
    }

    .page{
        cursor:pointer;
        margin:0em .3em;
        border:1px solid #234f94;
        border-radius:8px;
        display:flex;
        align-items:center;
        justify-content:center;
        max-width:40px;
        max-height:40px;
        transition:.2s;
        font-size:13px;
        color: ${props => props.theme.TextColorMain};
        
        a{
            border:none;
            min-height:40px;
            min-width:40px;
        }

        &:hover{
            background-color: #234f94;
            color:white;
            transition:.2s;
        }
    }

    .next.disabled{
        display:none;
    }

    .previous.disabled{
        display:none;
    }

    .previous, .next{
        display:flex;
        cursor:pointer;
        margin:0em .1em;
        border:1px solid #234f94;
        color:#234f94;
        border-radius:8px;
        width:65px;
        font-size:13px;
        height:40px;
        transition:.2s;

        a{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            padding:0em .5em;
            justify-content:center;
        }

        &:hover{
            background-color: #234f94;
            color:white;
            transition:.2s;
        }
    }`
