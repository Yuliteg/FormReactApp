import { useState, useEffect } from "react";
import { StyledContainer, BottomContentContainer} from "./styles.js";
import Axious from 'axios'
import Form from "./components/Form";
import Footer from "./components/Footer.js";


function App() {
  const url = 'https://blue-magpie-shoe.cyclic.app/';

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [formErrors, setFormErrors] = useState({});

  return (
    <>
      <StyledContainer>
        <Form 
        data={data} 
        setData={setData} 
        url={url} 
        formErrors={formErrors} 
        setFormErrors={setFormErrors}/>
        <BottomContentContainer>
          <Footer />
        </BottomContentContainer>
      </StyledContainer>
    </>
  )
}



export default App;