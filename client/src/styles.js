import styled from 'styled-components'
import img from './img/background.jpg'

export const StyledContainer = styled.section`
   background-image: url(${img});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const StyledFormWrapper = styled.div`

   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

  .text {
  margin-top: 5%;
  margin-bottom: 15px;
  font-size: 40px;
  font-family: 'Apercu Arabic Pro';
  font-weight: 500;
  }

   .my-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

  .form-input {
    width: 50%;
    max-width: 400px;
    padding: 13px 20px;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    background: #FFFFFF;
    font-family: 'Apercu Arabic Pro';
    font-weight: 400;
    font-size: 18px;
    color: #2D2D2D;
  }

  .form-textarea {
    width: 50%;
    max-width: 400px;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    background: #FFFFFF;
    padding: 13px 20px;
    font-family: 'Apercu Arabic Pro';
    font-size: 18px;
    line-height: 150%;
    color: #2D2D2D;
    resize: none;
  }

  .form-send-btn {
  color: #fff;
  background: #FAD34F;
  border: none;
  padding: 20px 20px; 
  border-radius: 500px;
  cursor: pointer;
  font-family: 'Apercu Arabic Pro';
  font-size: 1.1rem;
  width: 300px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 500px) {
    padding: 3% 5%; 
    }
  }

  .error-msg {
    margin-top: 10px;
    margin-bottom: 10px;
    color: red;
    font-family: 'Apercu Arabic Pro'    
    }
   }
`

export const BottomContentContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 10%;
  background: #F0F0F0;
  border: 1px solid #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
`



