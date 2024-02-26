


import styled from "styled-components";
import { Form } from "../components/List/Form";
import List from "../components/List/List";
import SideBar from "../components/UI/SideBar";




const MainPage = () => {
  return (
    <MainPageStyle>
    <SideBar/>
    <List/>
    <Form/>
   

    
   
 
      
     
     
    </MainPageStyle>
  );
};
const MainPageStyle = styled("div")`
  display: flex;
  
`



export default MainPage;
