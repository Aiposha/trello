import React from "react";
import { RiTrelloLine } from "react-icons/ri";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbBellSearch } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { RxQuestionMark } from "react-icons/rx";
const Header = () => {
  return (
    <HeaderTrelloStyle>
     
      <ContainerOne>
        <h2>
        <TfiLayoutGrid3/>
           <RiTrelloLine />
          Tello
        </h2>
        </ContainerOne>
        <ContainerSecond>
        
      
        
        </ContainerSecond>
        <ContainerThird>
        <input type="text"   placeholder="поиск"/>
        <p><TbBellSearch /></p>
        <p><RxQuestionMark /></p>
        <p><FaUserAlt /></p>
      
        </ContainerThird>
     
    </HeaderTrelloStyle>
  );
};

const HeaderTrelloStyle = styled("div")`
  background-color: #171733;
  width: 100%;
  height: 60px;
  color: #afa6a6;
  display: flex;
  justify-content: space-between;
`;

const ContainerOne = styled("div")`
display: flex;
gap: 20px;
  
`

const ContainerSecond = styled("div")`

`
const ContainerThird = styled("div")`
display: flex;
flex-direction: row ;
margin-top: 10px;
margin-right: 10px;
gap: 15px;
  
 && input{
   height: 30px;
   border-radius: 5px;
   background-color: #2b2727;
   color: #f7f8f9;
  width: 200px;
 


  };
`

export default Header;
