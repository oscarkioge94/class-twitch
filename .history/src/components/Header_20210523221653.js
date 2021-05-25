import styled from "styled-components";
import twitch from "./twitch.png";
import { IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Header() {
    return (
      <Nav>
          <img src={twitch} alt="logo"/>
          <List>
              <li>Browse</li>
              <li>Esports</li>
              <li>Music</li>
          </List>
          <Button>
              <IconButton>
              <MoreHorizIcon/>
              </IconButton>
            
          </Button>
          <Middle>
              <input placeholder="search" type="text"/>
          </Middle>
          
      </Nav>
    )
}

const Middle = styled.div``;
const Button = styled.div`
    margin-left:28px;
    align-items:center;
    cursor:pointer;
`;
const Nav = styled.div`
    display:flex;
    align-items:center;
    height:55px;
    border-bottom: 1px solid whitesmoke;
    & img{
        height:24px;
        margin:10px;
    }
   
`;
const List = styled.ul`
    text-decoration: none;
    list-style: none;
    display:flex;
    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    & li{
        margin-left: 10px;
        cursor:pointer;
    }
   
`;
export default Header
