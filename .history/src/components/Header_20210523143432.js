import styled from "styled-components";
import twitch from "./twitch.png"
function Header() {
    return (
      <Nav>
          <img src={twitch} alt="logo"/>
          <ul>
              <li>Browse</li>
              <li>Esports</li>
              <li>Music</li>
          </ul>
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
    &ul{
        text-decoration:none;
        list-style: none;
        font-family: sans-serif;
    }
`;
export default Header
