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
`;
export default Header
