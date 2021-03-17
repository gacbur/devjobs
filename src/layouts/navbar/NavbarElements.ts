import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavCnt = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    `

export const Nav = styled.nav`
    width: 100%;
    max-width:1100px;
    display:flex;
    color:white;
    font-weight:600;
    align-items:center;
    padding:1em 4em;
    border-bottom-right-radius: 80px;
    border-bottom-left-radius: 80px;
    height:100px;
    background: rgb(117,178,215);
    background: linear-gradient(180deg, rgba(117,178,215,1) 0%, rgba(111,61,252,1) 100%);

    ul{
        width:100%;
        display:flex;
        justify-content: flex-end;
        align-items:center;

        li{
            list-style-type:none;

            &.pin{
                color:white;
                text-decoration:none;
                margin:0em 1em;

                a{
                    text-decoration:none;
                    color:white;
                    font-size:25px;
                    padding:.5em;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    transition: .3s;

                    &:hover{
                        color: ${props => props.theme.TextColorSecondary}
                    }
                }
            }
        }
    }
`

export const LogoCnt = styled.div`
    width:120px;
    height:50px;

    a{
        font-size:20px;
        text-decoration:none;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        transition: .3s;

        &:hover{
            color: ${props => props.theme.TextColorSecondary}
        }
    }
`

export const ThemeToggler = styled.button`
    cursor:pointer;
    font-size:20px;
    display:flex;
    background-color: rgba(0,0,0,0);
    border:none;
    color:white;
    padding:.5em;
    transition: .3s;
    outline:none;

    &:hover{
        color: ${props => props.theme.TextColorSecondary}
    }
`

export const NavLink = styled(Link)`

`
