import styled from 'styled-components'


export const Item = styled.div`
    position:relative;
    background-color: ${props => props.theme.elementsBackgroundColor};
    padding: 2em 2em;
    width:95%;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
    min-height:500px;
    max-width:800px;
    margin-top:4em;
    margin-bottom:4em;
    border-radius: 15px;

    @media all and (max-width:450px){
        padding:2em .7em;
        }
`

export const ItemLogo = styled.div`
    position:absolute;
    left:50%;
    top:10px;
    transform: translate(-50%, -50%);
    border: 4px solid ${props => props.theme.elementsBorder};
    box-shadow: 0 2px 8px rgba(0,0,0,.3);
    background-color: white;
    width:130px;
    height: fit-content;
    padding:0em .5em;
    min-height:130px;
    max-height:130px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    overflow:hidden;

    img{
        width: 100%;
        display:flex;
    }
`

export const ItemCompanyH4 = styled.h4`
    color: ${props => props.theme.TextColorMain};
    font-size:18px;
    margin-top:5em;
    margin-bottom:1em;
    transition:.3s;
`

export const ItemDateP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:13px;
    margin-top:.5em;
    transition:.3s;
`
export const ItemEmploymentP = styled.p`
    color: ${props => props.theme.TextColorSecondary};
    font-size:12px;
    margin-top:.5em;
    transition:.3s;
`
export const ItemTitleH3 = styled.h3`
    color: ${props => props.theme.TextColorMain};
    font-size:19px;
    margin-top:2em;
    flex-grow:1;
    transition:.3s;
`
export const ItemLocationH6 = styled.h6`
    color: #3470a8;
    margin-top:1.5em;
    font-size:13px;
    transition:.3s;
`

export const ItemDescription = styled.div`
    margin:2em 0em;
    padding:.5em;
  
    *{
        transition:.3s;
        word-wrap: break-word;
    }

    pre{
        white-space: pre-wrap;     
    }

    code{
        display: inline-block;
        color: ${props => props.theme.TextColorMain};

    }

    strong{
        color: ${props => props.theme.TextColorMain};
        font-size:14px;
        margin-top:2em;
        margin-bottom:.8em;
        display:block;
    }

    li{
        margin:0em 3em;
        font-size:14px;
        color: ${props => props.theme.TextColorMain};
    
        @media all and (max-width:450px){
            margin:0em 1em;
        }
    }

    h1,h2,h3,h4,h5,h6{
        margin-top: 1.5em;
        margin-bottom:1em;
        font-size: 20px;
        color: ${props => props.theme.TextColorMain};
    }

    a{
        color: ${props => props.theme.LinkColor};

        &:hover{
            opacity:0.6;
        }
    }

    p{
        margin:1.2em 0em;
        font-size:14px;
        color: ${props => props.theme.TextColorMain};
    }

    p:last-child{
        color: ${props => props.theme.TextColorMain};
        margin-top:1.5em;
    }
`
export const ItemPinBtn = styled.button`
    cursor:pointer;
    position:absolute;
    top:30px;
    right:30px;
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

    @media all and (max-width:450px){
        top:10px;
        right:10px;
    }

    &:hover{
        background-color: #1d4079;
        transition:.3s;
    }

    .pin{
        font-size:25px;
        color:white;
        margin:3px 3px 0px 0px;
    }

    .plus{
        font-size:19px;
        top:10px;
        left:30px;
        color:white;
        position:absolute;
    }

    .checkmark{
        position:absolute;
        left:-3px;
        top:0px;
        width:25px;
        color:#5fbf5c;
        height:25px;
        border-radius:50em;

    }

`