import styled from "styled-components";
import twitch from "./twitch.png"
function Header() {
    return (
      <Nav>
          <img src={twitch} alt="logo"/>
      </Nav>
    )
}

const Nav = styled.div`
    display:flex;
    align-items:center;
    height:60px;
    border-bottom: 1px solid whitesmoke;
    & img{
        height:24px;
        margin:10px;
    }
`;
export default Header
