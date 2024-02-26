import { useState } from "react";
import styled from "styled-components";
import { addCard } from "../../store/slices/TrelloSicle";
import { useDispatch } from "react-redux";
import AddCard from "./AddCard";
import { HiDotsVertical } from "react-icons/hi";

import { GrClose } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const TodoItem = ({ title, id, description }) => {
  const dispatch = useDispatch();
  const [cardTrello, setCardTrello] = useState("");
  const [openInput, setOpenInput] = useState(false);

  const handleCardChange = (e) => {
    setCardTrello(e.target.value);
  };

  const addNewCardHandle = () => {
    const newAddCard = {
      cartTitle: cardTrello,
      id: Date.now().toString(),
      parrentId: id,
    };
    dispatch(addCard(newAddCard));
    setCardTrello("");
  };
  return (
    <Styledlist key={id}>
      <TitleStyleIcon>
        {" "}
        <h4>{title} </h4>
        <HiDotsVertical />
      </TitleStyleIcon>

      {description.map((card) => (
        <AddCard key={card.id} {...card} />
      ))}

      {openInput ? (
        <FirstCard>
          <input
            type="text"
            onChange={handleCardChange}
            value={cardTrello}
            placeholder="ввести загаловок для этой карточки"
          />
          <BtnAddStyle>
            <button type="submit" onClick={addNewCardHandle}>
              Добавить карточку
            </button>
            <GrClose onClick={() => setOpenInput(!openInput)} />
          </BtnAddStyle>
        </FirstCard>
      ) : (
        <AddListStyleBtn>
          <IoMdAdd />
          <button onClick={() => setOpenInput(!openInput)}>
            добавить карточку
          </button>
        </AddListStyleBtn>
      )}
    </Styledlist>
  );
};

const Styledlist = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 25px;
  width: 300px;

  border-radius: 5px;
  background-color: black;
  h4 {
    font-size: 18px;
  }
`;

const FirstCard = styled("div")`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 5px;
    margin-left: 7px;
    width: 250px;
    height: 80px;
    border-radius: 5px;
    background-color: black;
    color: aliceblue;
  }
`;

const BtnAddStyle = styled("div")`
  margin-top: 10px;
  margin: 10px;
  button {
    background-color: #0070f3;
    width: 160px;
    height: 35px;
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

const AddListStyleBtn = styled("div")`
  font-size: 20px;
  button {
    width: 200px;
    height: 30px;
    background-color: #cdd6dc;
    border-radius: 5px;
  }
`;

const TitleStyleIcon = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  padding: 10px;
`;

export default TodoItem;
