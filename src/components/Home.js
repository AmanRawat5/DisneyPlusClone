import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommendation from './Recommendation'
import NewDisney from './NewDisney'
import Viewers from './Viewers'
import Originals from './Originals'
import Trending from './Trending'
// import db from '../firebase'

function Home() {
    /* useEffect(() => {
        db.collection("movie").onSnapshot((snapshot) => {
            let tempMoveis = snapshot.docs.map((docs) => {
                return { id: docs.id, ...docs.data() }
            })
        })
    }, []) */

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommendation />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

export default Home


const Container = styled.main
    `
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
        background:url("/images/home-background.png") center center / cover no-repeat fixed;
        content:""; 
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0; 
        z-index:-1;
    }

`