import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ErrorMessage from "../UI/ErrorMessage";
import { signInPostThunks } from "../../store/thunks/authThunks";
import { FaTrello } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
 const navigate = useNavigate()
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

  const submitInlogin = async (userData) => {
    dispatch(signInPostThunks({userData,navigate}));
    console.log(userData);
  };
  return (
    <SignInForm>
      <h1>
        {" "}
        <FaTrello /> Trello
      </h1>
      <form onSubmit={handleSubmit(submitInlogin)} action="">
        <input
          {...register("email", {
            required: { value: true, message: "Заполните поле" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "пример: exemple@gmail.com!",
            },
          })}
          type="email"
          placeholder="введите почту"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <input
          {...register("password", {
            required: { value: true, message: "Заполните поле" },
            minLength: {
              value: 6,
              message: "пароль должен быть больше 6 символов",
            },
          })}
          type="password"
          placeholder="введите пароль"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <button>Sign in</button>
      </form>
    </SignInForm>
  );
};
const SignInForm = styled("div")`
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

export default SignIn;
