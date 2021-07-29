import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="RECENT LAUNCH"
                description ="Order Online for Touchless Delivery"
                LeftBtnText ="Rewatch"
                backgroundImg = "1.png"
            
            />
            <Section 

                title="RECENT LAUNCH"
                description ="CRS-22 MISSION"
                LeftBtnText ="Custom Order"

                backgroundImg = "2.jpg"
            />
            <Section    
                title="COMPLETED MISSION"
                description ="DRAGON RETURNS TO EARTH"
                backgroundImg = "3.webp"
                LeftBtnText ="Custom Order"
            />
            <Section 
                title="RECENT LAUNCH"
                description ="STARLINK MISSION"
                backgroundImg = "4.png"
                LeftBtnText ="Custom Order"
            />
            <Section 
                description ="STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"
                backgroundImg = "5.jpg"
                LeftBtnText ="Custom Order"
                RightBtnText ="existing inventory" 
            />
        
        </Container>
    )
}

const Container = styled.div `
    height: 100vh;
`;
export default Home; 
