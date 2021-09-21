import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { api } from "../services/api";

type signInData = {
  email: string;
  password: string;
};

type User = {
  nome: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: signInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "@front-e-commerce:token": token } = parseCookies();
    if (token) {
      api.post("/recoverUser", { token }).then((response) => {
        setUser(response.data.user);
      });
    }
  }, []);

  async function signIn({ email, password }: signInData) {
    const response = await api.post("/auth", {
      email,
      password,
    });
    const { token, user } = response.data;

    // console.log("response request");
    // console.log(token);
    // console.log(user);

    setCookie(undefined, "@front-e-commerce:token", token, {
      maxAge: 60 * 60 * 24, // 24 horas
    });

    api.defaults.headers["Authorization"] = "Bearer " + token;

    setUser(user);

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
