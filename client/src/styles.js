import React, { useState } from "react";
import styled, { createGlobalStyle, css} from 'styled-components'


export const cloudImg = "../img/Vector (4).png"

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
form {
    display: grid;
}
h2{
    font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3E3E3E;
  margin-top: 50px;
  margin-bottom: 0px;

  @media screen and (max-width: 450px) {
    font-size: 30px;
    
  }
}
`

export const SharedStyles = css`

`

export const StyledFormWrapper = styled.div`
  position: absolute;
  width: 40%;
  height: 50%;
  top: 13%;
  left: 5%;
  z-index: 1;
`

export const StyledForm = styled.form`
position: absolute;
width: 30vw;
height: 575px;
top: 50px;
z-index: 1;

`
export const StyledInput = styled.input`
height: 100%;
  width: 100%;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 0 20px;

  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;

  color: #2D2D2D;
  z-index: 1;

  @media screen and (max-width: 450px) {
    width: 180%;
  }
`
export const StyledTextArea = styled.textarea`
height: 100%;
  width: 100%;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 0 20px;
  resize: none;

  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  line-height: 300%;

  color: #2D2D2D;

  @media screen and (max-width: 450px) {
    width: 180%;
  }
  
`
export const StyledButton = styled.button`
  color: #fff;
  background: #FAD34F;
  border: none;
  padding: 5% 10%;
  border-radius: 500px;
  transition: 0.2s;
  cursor: pointer;
  position: relative;
  font-family: 'Apercu Arabic Pro';
  font-size: 1.1rem;
  line-height: 1rem;
  width: 300px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 450px) {
    width: 130%;
  }
`

export const StyledError = styled.div`
`

export const StyledContainer = styled.section`
  position: relative;
  border-radius: 0px;
  padding: 3% 15% 10% 10%;
`

export const Content = styled.div`
  position: relative;
  height: 558px;
  width: 100%;
`

export const ImgFigure1 = styled.img`
  height: 85px;
  width: 88px;
`

export const ImgFigure2 = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
  left: 45%;
  top: 1%;
  border-radius: 50%;
  background: #FAD34F;
  opacity: 0.2;
`

export const ImgWrapMap = styled.img`
  position: absolute;
  max-width: 100%;
  width: 65%;
  height: 50%;
  left: 55%;
  top: -10%;
`

export const ImgMap = styled.img`
  max-width: 100%;
  width: 50vw;
  height: 40vw;
  top: -28px;
  border-radius: 50%;
  margin-left: 100px; 
  background: url(../public/img/map.png);

  @media screen and (max-width: 1000px) {
     display: none;
  }
  `

export const ImgWrapper = styled.div`
  position: absolute;
  width: 55%;
  height: 150%;
  left: 65%;
  top: -20%;
  overflow: hidden;
`

export const ImgFigure3 = styled.img`
  position: absolute;
  left: 67%;
  top: 50%;
  width: 15vw;
  height: 13vw;

  @media screen and (max-width: 1400px) {
    left: 76%;
    top: 37%;
  }
  @media screen and (max-width: 500px) {
     display: none;
  }
`

export const ImgFigure4 = styled.img`
  position: absolute;
  left: 65%;
  top: 44%;
  width: 6.5vw;
  height: 6.5vw;
  
  @media screen and (max-width: 1400px) {
    left: 72.5%;
    top: 35%;
  }
  @media screen and (max-width: 500px) {
     display: none;
  }
`

// export const CloudContainer = styled.div`
//   background-image: url('Cloud.png');
//   width: 1200px;
//   height: 1200px;
// `

export const BottomContentContainer = styled.div`
  box-sizing: border-box;

position: absolute;
width: 135.03%;
height: 25.45%;
left: -15%;

top: 132.2%;
overflow: hidden;
background: #FAFAFA;
border: 1px solid #D8D8D8;

@media screen and (max-width: 500px) {
    width: 137.03%;
  }
`

export const ImgVector = styled.img`
  position: relative;
  left: 20%;
  top: 48%;
  margin-left: 20px;
`

export const ImgFigure5 = styled.img`
  height: 220px;
  width: 220px;
  position: absolute;
  left: 5.02%;
  top: -14%;

  @media screen and (max-width: 500px) {
     opacity: 0.5;
  }
`

export const ImgFigure6 = styled.img`
  position: absolute;
  width: 109.25px;
  height: 93.47px;
  left: 84%;
bottom: 34%;

`

export const ImgFigure7 = styled.img`
position: absolute;
width: 109.25px;
height: 93.47px;
left: 96%;
bottom: 10%;
`

export const Cloud1 = styled.img`
  position: absolute;
  left: 42.84%;
  top: 17%;
  width: 140px;
  height: 103px;
`

export const Cloud2 = styled.img`
position: absolute;
left: 63%;
top: 8.95%;
bottom: 76.49%;
width: 220px;
height: 163px;

@media screen and (max-width: 1000px) {
     display: none;
  }
`

export const Cloud3 = styled.img`
position: absolute;
left: 60%;
top: 60%;
bottom: 65.82%;
width: 170px;
height: 123px;
z-index: -1;

@media screen and (max-width: 850px) {
     display: none;
  }
`

export const Cloud4 = styled.img`
position: absolute;
left: 80%;
right: 37.44%;
top: 66.13%;
bottom: 22.48%;
z-index: -1;
@media screen and (max-width: 700px) {
     display: none;
  }
`

export const Cloud5 = styled.img`
position: absolute;
left: -17%;
top: 30.48%;
width: 17%;
height: 25%;
z-index: -1;

@media screen and (max-width: 1000px) {
     display: none;
  }
`

export const Cloud6 = styled.img`
position: absolute;
left: -20%;
top: 60.48%;
width: 17%;
height: 25%;
z-index: -1;

@media screen and (max-width: 1000px) {
     display: none;
  }
`
export const Cloud7 = styled.img`
position: absolute;
left: 24%;
top: 95%;
width: 17%;
height: 25%;
z-index: -1;

@media screen and (max-width: 1000px) {
     display: none;
  }
`

export const Cloud8 = styled.img`
position: absolute;
left: -3%;
top: 105%;
width: 13%;
height: 18%;
z-index: -1;

@media screen and (max-width: 1000px) {
     display: none;
  }
`

