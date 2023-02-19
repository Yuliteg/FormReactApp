import styled from 'styled-components'

export const StyledContainer = styled.section`
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

  h2 {
    margin-top: 5%;
  font-size: 35px;
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
    width: 40%;
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
    width: 40%;
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
  padding: 2% 3%; 
  border-radius: 500px;
  cursor: pointer;
  font-family: 'Apercu Arabic Pro';
  font-size: 1.1rem;
  line-height: 1rem;
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
height: 15%;
background: #FAFAFA;
border: 1px solid #D8D8D8;
display: flex;
align-items: center;
justify-content: center;
gap: 3%;
`



