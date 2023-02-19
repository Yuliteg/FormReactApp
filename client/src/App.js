import { useState, useEffect } from "react";
import { StyledContainer, BottomContentContainer} from "./styles.js";
import Axious from 'axios'
import Form from "./components/Form";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
      <StyledContainer>
        <Form />
        <BottomContentContainer>
          <Footer />
        </BottomContentContainer>
      </StyledContainer>
    </>
  )
}



export default App;