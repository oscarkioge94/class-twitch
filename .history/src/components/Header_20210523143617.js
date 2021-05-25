import styled from "styled-components";
import twitch from "./twitch.png"
function Header() {
    return (
      <Nav>
          <img src={twitch} alt="logo"/>
          <List>
              <li>Browse</li>
              <li>Esports</li>
              <li>Music</li>
          </List>
      </Nav>
    )
}

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
const List = styled.ul``;
export default Header
