import styled from "styled-components";
function SideBar() {
    return (
        <Home>
            <Channels>FOLLOWED CHANNELS</Channels>
            <ShowMore>Show More</ShowMore>
        </Home>
       

    )
}

const Channels = styled.h1``;
const Home = styled.div``;
const ShowMore = styled.p``;

export default SideBar
