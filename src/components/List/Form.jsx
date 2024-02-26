import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addlist } from "../../store/slices/TrelloSicle";
import styled from "styled-components";

export const Form = () => {
  const [trelloData, setTrelloData] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTrelloData(e.target.value);
  };
  const handleAddTodoForm = () => {
    const newTask = {
      title: trelloData,
      id: Date.now(),
      description: [],
    };
    dispatch(addlist(newTask));

    setTrelloData("");
  };

  return (
    <ContainerForm>
      {open ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={handleInputChange}
            type="text"
            value={trelloData}
            placeholder="ввести загаловок списка"
          />


          <SyleBtuttonClosedAdd>
            <button type="submit" onClick={handleAddTodoForm}>
              Добавить список
            </button>
            <GrClose onClick={() => setOpen(false)} />
          </SyleBtuttonClosedAdd>
        </form>
      ) : (
        <BtnAddList>
          <button onClick={() => setOpen(!open)}>добавить список</button>
        </BtnAddList>
      )}
    </ContainerForm>
  );
};
const ContainerForm = styled("div")`
  display: flex;
  flex-direction: column;
  color: aliceblue;
  margin-top: 40px;
  margin-left: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
   
    background-color: black;
    border-radius: 15px;
    
    input {
      margin-top: 5px;
      margin-left: 7px;
      width: 250px;
      height: 30px;
      background-color: black;
      color: aliceblue;
    }
  }
`;
const BtnAddList = styled("div")`
  button {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    width: 300px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    padding: 0 56px;
    height: 45px;
    line-height: 45px;
    border-radius: 7px;
    background-color: #0070f3;
    color: white;
    font-weight: 400;
    font-size: 16px;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  button:hover {
    background-color: #a2a4b3;
  }
`;

const SyleBtuttonClosedAdd = styled("div")`
  display: flex;
  gap: 10px;
  font-size:20px;
  
 

  button {
    background-color: #0070f3;
    width: 150px;
    height: 38px;
    margin-left: 10px;
    border-radius: 7px;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border: none;
  }
  button:hover {
    background-color: #a2a4b3;
  }

  
`;
