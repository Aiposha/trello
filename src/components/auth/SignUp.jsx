import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ErrorMessage from "../UI/ErrorMessage";
import { signUpPostThunks } from "../../store/thunks/authThunks";
import { FaTrello } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const { registrationStatus } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (userData) => {
    dispatch(signUpPostThunks({userData,navigate}));
    
  };
  return (
    <SignUpForm>
      {registrationStatus && <ErrorMessage>{registrationStatus}</ErrorMessage>}

      <h1>
        {" "}
        <FaTrello /> Trello
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "заполните поле",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "пример: exemple@gmail.com!",
            },
          })}
          type="email"
          placeholder="веедите почту"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "заполните поле",
            },
            minLength: {
              value: 6,
              message: "пароль должен быть больше 6 символов",
            },
          })}
          type="text"
          placeholder="введите пароль"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "заполните поле",
            },
            minLength: {
              value: 6,
              message: "пароль должен быть больше 6 символов",
            },
          })}
          type="text"
          placeholder="потдвердите пароль"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <button type="submit">create</button>
      </form>

      <p>
        вы уже зарегистрировались? <Link to="/login">войти</Link>
      </p>
    </SignUpForm>
  );
};
const SignUpForm = styled("div")`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 10px;
  padding: 10px 0 20px;
  border: 1.5px solid aliceblue;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  h1 {
    color: #1d1d88;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 40px;
    margin-top: 10px;
  }
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 20px;
    padding-left: 100px;

    input {
      width: 350px;
      height: 40px;
      padding-left: 15px;
    }
    button {
      width: 370px;
      height: 45px;
      background: #3dcb3d;
      font-size: 24px;
      font-weight: 500;
      color: white;
      border: none;
    }
  }
`;

export default SignUp;
