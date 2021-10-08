import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <Link t0="/">
                    <img src="images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </Link>
                <Link t0="/">
                    <img src="images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </Link>
                <Link t0="/">
                    <img src="images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </Link>
                <Link t0="/">
                    <img src="images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </Link>
                <Link t0="/">
                    <img src="images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </Link>
                <Link t0="/">
                    <img src="images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            {/* <Login>Login</Login> */}
            <UserImg src="/images/viewers-disney.png" />

        </Nav>
    )
}

export default Header


const Nav = styled.nav
    `
    height:70px;
    background:#090b13;
    display:flex;
    align-item:center;
    padding:0;
    overflow-x:hidden; 
`
const Logo = styled.img
    `
    width:80px;
`
const NavMenu = styled.div
    `
    display:flex;
    flex:1;
    margin-left:25px;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        text-decoration:none;
        color:white;

        img{
           height:20px; 
        }

        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scale(0);
            }
        }
        &:hover{
            span:after{
                transform:scale(1);
                opacity:1;
            }
        }
    }
`
const UserImg = styled.img
    `
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
`



/* background-color:rgba(0,0,0,0.6);
padding:8px 16px;
text-decoration:uppercase;
letter-spacing:1.5rem;
border:1px solid #f9f9f9;
border-radius:4px; */
