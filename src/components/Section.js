import React from 'react'
import styled from 'styled-components';
function Section({title , description , LeftBtnText  ,backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
           <Fade bottom >
                <ItemText>
                    <div>{title}</div>
                    <div>{description}</div>
                </ItemText>
                <LeftButton>
                            {LeftBtnText}
                </LeftButton>
           </Fade>         
                
            
            <DownArrow src ="/images/down-arrow.svg"/>
      
        </Wrap>
    )
}
const Fade = styled.div `
    display:flex;
    flex-direction: column;

`;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url('/images/model-s.jpg');
    background-position:center ;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`    
    padding-right: 535px;
    padding-top:480px;
    div{
        font-size: 1.5rem;
        font-weight:700;
    }
 
`;

const LeftButton = styled.div`
    background-color:transparent;
    border : 3px solid #fff;
    color:white;
    height:3.5rem;
    width : 10rem;
    display:flex;
    justify-content:center;
    align-items : center;
    opacity:0.75;
    text-transform: uppercase;
    font-size: 14px;
    font-weight:700;
    cursor:pointer;
    &:hover{
        background-color: #fff;
        color:#333;
    }
`;
const RightButton = styled(LeftButton)`
    background:#fff;
    opacity:0.65;
    color:black;

`;

const DownArrow = styled.img`
    margin-top:20px;
    margin-left: 630px;
    height:40px;
    animation : animateDown infinite 1.5s;
    overflow-x:hidden;
`;
const Buttons = styled.div`
`;
export default Section; 

