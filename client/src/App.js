import React, { useState, Component, useEffect } from "react";
import './index.css'
import styled, { createGlobalStyle, css} from 'styled-components'
import {GlobalStyle, StyledContainer, Content, 
    ImgFigure1, ImgFigure2, ImgMap, 
    StyledFormWrapper, StyledForm, StyledInput, 
    StyledTextArea, StyledError, StyledButton, ImgWrapper,
    ImgFigure3, ImgFigure4,CloudContainer, BottomContentContainer,
    ImgVector, ImgFigure5, ImgFigure6, ImgFigure7
    } from "./styles.js";
import Axious from 'axios'
import Swal from 'sweetalert2'



function Container() {
      return (
        <>
        <GlobalStyle />
         <StyledContainer>
           <Content >
           <ImgFigure1 src="../img/red_cartoon 4.png" alt=""></ImgFigure1>
           <ImgFigure2 src="../img/Ellipse 31.png"></ImgFigure2>
             <Form></Form>
              <ImgWrapper>
                <ImgMap src="../img/map.png" alt=""></ImgMap>
              </ImgWrapper>
            
            <ImgFigure2></ImgFigure2>
            <ImgFigure3 src="../img/red_cartoon 3.png" alt="red cartoon"></ImgFigure3>
            <ImgFigure4 src="../img/goodie1.png" alt="img goodie"></ImgFigure4>


                    {/* <CloudContainer></CloudContainer> */}

          <BottomContentContainer>
             <ImgFigure5 src="../img/red_cartoon 3.png" alt="red cartoon"></ImgFigure5>

                 <ImgVector src="img/Vector (1).png"></ImgVector>
                 <ImgVector src="img/Vector (2).png"></ImgVector>
                 <ImgVector src="img/Vector (3).png"></ImgVector>
                 <ImgVector src="img/Vector.png"></ImgVector>

                 <ImgFigure6 src="../img/Group 80.png" alt="red cartoon"></ImgFigure6>
                <ImgFigure7 src="../img/red_cartoon 4.png" alt="red cartoon"></ImgFigure7>

             </BottomContentContainer>
           </Content>
         </StyledContainer>

        </>
      )
}



 function Form() {
  const url = '/api/contact-form';


     const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
     })

     const [formErrors, setFormErrors] = useState({})
     const [isSubmit, setIsSubmit] = useState(false)

     function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
     }

    function submit(e) {
        e.preventDefault();
        setFormErrors(validate(data))

        Axious.post(url, {
            name: data.name,
            email: data.email,
            message: data.message
        })
        .then(res => {
            if(res.status === 200) {
              Swal.fire("Thank you!", "Your request has been accepted for processing. Our manager will contact you soon. ", "success").then(()=>{
                window.location.reload();
              });
              
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
        })
    }


    useEffect(() => {
      console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(data)
      }
    }, [formErrors])

    function validate (values) {
      const errors = {}
       if(!values.name) {
         errors.name = "Name is required!"
       }
       if(!values.email) {
        errors.email = "Email is required!"
      }
      if(!values.message) {
        errors.message = "Message is required!"
      }
      return errors
    }

     return (
       <>
        <GlobalStyle/>
        <StyledFormWrapper>
           <StyledForm onSubmit={(e) => submit(e)}>
           <h2>Reach out to us!</h2>
             <label htmlFor="name"></label>
              <StyledInput 
              type="text" 
              name="name" 
              placeholder="Your name*" 
              onChange={(e) => handle(e)}
              id="name"
              value={data.name}
              />
              <p style={{color:"red", fontFamily: 'Apercu Arabic Pro'}}>{formErrors.name}</p>

              <label htmlFor="email"></label>
                <StyledInput 
                type="email" 
                name="email" 
                placeholder="Your e-mail*"
                onChange={(e) => handle(e)}
                id="email"
                value={data.email}
                />
                 <p style={{color:"red", fontFamily: 'Apercu Arabic Pro'}}>{formErrors.email}</p>
                 <label htmlFor="message"></label>
                  <StyledTextArea 
                  name="message" 
                  placeholder="Your message*"
                onChange={(e) => handle(e)}
                id="message"
                value={data.message}
                  />
                   <p style={{color:"red", fontFamily: 'Apercu Arabic Pro'}} >{formErrors.message}</p>
                   <StyledError></StyledError>
                    <StyledButton>Send Message</StyledButton>
           </StyledForm>
      </StyledFormWrapper>  
     </>
    )
} 





export default Container;