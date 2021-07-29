import React ,{useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import  {selectNavbar } from "../features/Nav/NavSlice"
import {useSelector} from 'react-redux'
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
function Header() {
    
    const [burgerStatus,setBurgerStatus] = useState(false);
    const Navbar = useSelector(selectNavbar)
    return (
     
            <Container>
                <Link>
                    <img src='/images/logo.png' al=""/>
                </Link>

                <Menu>
                { Navbar && Navbar.map((navbarItem) =>
                    <a  href="#">{navbarItem}</a>
                )}
                </Menu>
                <RightMenu >
                    <a href="">Shop</a>
                    < HorizontalSplitIcon onClick={() => setBurgerStatus(true)}/>
                </RightMenu>

                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)}/>

                    </CloseWrapper>
                    <li><a href="#">MISSION</a></li>
                    <li><a href="#">LAUNCHES</a></li>
                    <li><a href="#">CAREERS</a></li>
                    <li><a href="#">UPDATES</a></li>
                    <li><a href="#">SHOP</a></li>
                    

                </BurgerNav>
            </Container>
    )
}

const Link = styled.a`
    img{
        width: 200px;
    margin-left: 100px;    }
`;
const Container = styled.div`
    min-height: 4rem;
    position : fixed;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 1.25rem;
    top:0;
    right:0;
    left:0;
    z-index:1;
`;

const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex:1;
    margin-right: 200px;

    a{
        font-weight:600;
        text-transform:uppercase;
        padding : 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width:1020px){
        display:none;
    }
`;
const RightMenu  = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    a{
        font-weight:600;
        margin-right : 7px;
        margin:16px;
        padding: 5px;
        &:hover{  
            background : rgba(0,0,0,0.1);
            border-radius:20px;
        }
        @media (max-width:1020px){
        display:none;
    }
    }
    span {
        padding:5px;
        margin-right : 16px;
        font-weight:600;
        cursor:pointer;
        &:hover{
            
        background : rgba(0,0,0,0.1);
        border-radius:20px;
        }
    }

`;
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`;

const BurgerNav = styled.div`
    position : fixed;
    top:0;
    bottom:0;
    right:0;
    width :20rem;
    background-color: #333;
    z-index:10;
    list-style:none;
    padding:1.25rem;
    text-align:start;
    transform : ${props => props.show ? 'translateX(0)' : 'TranslateX(100%)' };
    transition : transform 0.2s ease-out ;
    li{
        padding:1rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        display: flex;
        justify-content: flex-end;
        font-weight:600;  
        color: white;
        &:hover{
        border-radius:20px;
    } 
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;`;

export default Header;
