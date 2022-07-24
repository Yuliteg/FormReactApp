import React, { useState } from "react";
import styled, { createGlobalStyle, css} from 'styled-components'

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

`

export const StyledForm = styled.form`
position: absolute;
width: 30vw;
height: 575px;
top: 50px;


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




// import React, { useState, Component } from "react";
// import './index.css'
// import styled, { createGlobalStyle, css} from 'styled-components'
// import {GlobalStyle, StyledContainer, Content, 
//     ImgFigure1, ImgFigure2, ImgMap, 
//     StyledFormWrapper, StyledForm, StyledInput, 
//     StyledTextArea, StyledError, StyledButton, ImgWrapper,
//     ImgFigure3, ImgFigure4,ImgCloud, BottomContentContainer,
//     ImgVector, ImgFigure5, ImgFigure6, ImgFigure7
//     } from "./styles.js";
// import Axious from 'axios'





// function Container() {
//       return (
//         <>
//         <GlobalStyle />
//          <StyledContainer>
//            <Content >
//            <ImgFigure1 src="../img/red_cartoon 4.png" alt="yellow cartoon"></ImgFigure1>
//            <ImgFigure2 src="../img/Ellipse 31.png" alt="yellow cartoon"></ImgFigure2>
//              <Form></Form>
//               <ImgWrapper>
//                 <ImgMap src="../img/map.png" alt=""></ImgMap>
//               </ImgWrapper>
            
//             <ImgFigure3 src="../img/red_cartoon 3.png" alt="red cartoon"></ImgFigure3>
//             <ImgFigure4 src="../img/goodie1.png" alt="img goodie"></ImgFigure4>

//             <ImgCloud src="../img/Cloud.png"></ImgCloud>

//             <BottomContentContainer>
//             <ImgFigure5 src="../img/red_cartoon 3.png" alt="red cartoon"></ImgFigure5>

//                 <ImgVector src="img/Vector (1).png"></ImgVector>
//                 <ImgVector src="img/Vector (2).png"></ImgVector>
//                 <ImgVector src="img/Vector (3).png"></ImgVector>
//                 <ImgVector src="img/Vector.png"></ImgVector>

//                 <ImgFigure6 src="../img/Group 80.png" alt="red cartoon"></ImgFigure6>
//                 <ImgFigure7 src="../img/red_cartoon 4.png" alt="red cartoon"></ImgFigure7>

//             </BottomContentContainer>
//            </Content>
//          </StyledContainer>

//         </>
//       )
// }



//  function Form() {
//     const url = ""

//  const [inputValue, setInputValue] = useState('')

    //  const [data, setData] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    //  })

    //  function handle(e) {
    //     const newdata = {...data}
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    //     console.log(newdata)
    //  }

    // function submit(e) {
    //     e.preventDefault();

    //     Axious.post(url, {
    //         name: data.name,
    //         email: data.email,
    //         message: data.message
    //     })
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // }

//      return (
//        <>
//         <GlobalStyle/>
//         <StyledFormWrapper>
//            <StyledForm>
//            {/* <StyledForm onSubmit={(e) => submit(e)}> */}
//            <h2>Reach out to us!</h2>
//              <label htmlFor="name"></label>
//               <StyledInput 
//               type="text" 
//               name="name" 
//               placeholder="Your name*" 
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               />

//               <label htmlFor="email"></label>
//                 <StyledInput 
//                 type="email" 
//                 name="email" 
//                 placeholder="Your e-mail*"
//                 // onChange={(e) => handle(e)}
//                 id="email"
//                 // value={data.email}
//                 // value={emailValue}
//                 // onChange={(e) => setEmailValue(e.target.value)}
//                 />
//                  <label htmlFor="message"></label>
//                   <StyledTextArea 
//                   name="message" 
//                   placeholder="Your message*"
//                 //   value={messageValue}
//                 //   onChange={(e) => setMessageValue(e.target.value)}
//                 // onChange={(e) => handle(e)}
//                 id="message"
//                 // value={data.message}
//                   />
//                    <StyledError></StyledError>
//                     <StyledButton>Send Message</StyledButton>
//            </StyledForm>
//       </StyledFormWrapper>  
//      </>
//     )
// } 



// export default Container;