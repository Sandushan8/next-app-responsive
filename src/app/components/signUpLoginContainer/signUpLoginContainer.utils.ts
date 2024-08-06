"use server";

import { cookies } from "next/headers";
import {
  containerTypes,
  storeCookiesProps,
} from "./signUpLoginContainer.types";

export const storeCookies = ({ type, data }: storeCookiesProps) => {
  type === containerTypes.login
    ? cookies().set("login", JSON.stringify(data))
    : cookies().set("signup", JSON.stringify(data));

  console.log("Cookies stored");
};
