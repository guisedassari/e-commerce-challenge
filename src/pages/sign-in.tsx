/* eslint-disable @next/next/no-img-element */
import { Container, Content } from "../styles/pages/login";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    //try catch
    await signIn(data);
  }
  return (
    <Container>
      <Content>
        <img src="/images/logo_transparent.png" alt="Login" />
        <form onSubmit={handleSubmit(handleSignIn)}>
          <input {...register("email")} placeholder="E-mail" type="email" />
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
          />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
}
