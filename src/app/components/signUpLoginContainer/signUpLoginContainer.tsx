"use client";
import Image from "next/image";
import { Input, Button, Checkbox } from "@nextui-org/react";
import {
  containerTypes,
  SignUpLoginContainerProps,
  submitData,
} from "./signUpLoginContainer.types";
import Link from "next/link";
import { useState } from "react";
import { EyeSlashFilledIcon } from "./EyeSlashed";
import { EyeFilledIcon } from "./EyeFilled";
import { cookies } from "next/headers";
import { storeCookies } from "./signUpLoginContainer.utils";

export default function SignUpLoginContainer({
  type,
  imageUrl,
}: SignUpLoginContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const submit = (data: submitData) => {
    storeCookies({ type, data: isChecked });
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block md:relative w-screen h-1/2 md:w-1/2 md:h-screen overflow-hidden">
        <Image
          src={imageUrl}
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="md:rounded-br-3xl"
        />
      </div>
      <div className="z-10 w-screen md:w-1/2 h-full pb-10 rounded-b-2xl md:rounded-none shadow-2xl md:shadow-none md:px-40 pt-20 px-2 md:pt-40 bg-white">
        <div>
          <h1
            className="text-4xl md:text-header text-center md:text-left "
            style={{
              color: type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            {type === containerTypes.login ? "Login" : "Sign up"}
          </h1>
          <div className="flex justify-center md:justify-normal">
            <p className="text-sm text-center md:text-left w-44 md:w-full md:text-normal mt-2 md:mt-5">
              {"Please enter your login details to start having fun!"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-5 mt-4 mb-4">
          {type === containerTypes.signup && (
            <Input
              variant="bordered"
              type="text"
              label="Full Name"
              placeholder={"Baba Tunde"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <Input
            variant="bordered"
            type="email"
            label="Email Address"
            placeholder={"info@example.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            variant="bordered"
            type={isVisible ? "text" : "password"}
            placeholder={"password"}
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Checkbox
              isSelected={isChecked}
              color={type === containerTypes.login ? "secondary" : "success"}
              onValueChange={setIsChecked}
            />
            {type === containerTypes.login ? (
              <p className="text-sm md:text-normal">Keep me logged in</p>
            ) : (
              <p className="text-sm md:text-normal">
                I agree to the{" "}
                <b style={{ color: "#165A0F" }}>Terms & Conditions</b>
              </p>
            )}
          </div>
          {type === containerTypes.login && (
            <div className={"text-sm md:text-normal text-loginMain font-bold"}>
              Forgot password?
            </div>
          )}
        </div>
        <div>
          <Button
            color="primary"
            className={"w-full mt-2 mb-2 md:mt-5 md:mb-5"}
            style={{
              fontSize: "25px",
              height: "60px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
            onClick={() => {
              if (
                type === containerTypes.login &&
                (email === "" || password === "")
              ) {
                alert("Please fill in all fields");
                return;
              }
              if (
                (type === containerTypes.signup && fullName === "") ||
                email === "" ||
                password === ""
              ) {
                alert("Please fill in all fields");
                return;
              }
              submit({ email, password, fullName });
            }}
          >
            {type === containerTypes.login ? "Log in" : "Sign up"}
          </Button>
        </div>
        <div className="text-sm md:text-normal mb-3 md:mb-8 flex gap-5">
          {type === containerTypes.login
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            href={type === containerTypes.login ? "/signup" : "/login"}
            style={{
              color: type === containerTypes.login ? "#3C1AB9" : "#165A0F",
              fontWeight: "bold",
            }}
          >
            {type === containerTypes.login ? "Sign Up" : "Login"}
          </Link>
        </div>
        <div className="text-sm md:text-normal flex justify gap-3 mb-3 md:mb-10">
          <div
            className="flex"
            style={{
              alignItems: "center",
            }}
          >
            <div className="bg-black h-0.5 w-smallLineWidth md:w-lineWidth" />
          </div>
          Or continue with
          <div
            className="flex"
            style={{
              alignItems: "center",
            }}
          >
            <div className="bg-black h-0.5 w-smallLineWidth md:w-lineWidth" />
          </div>
        </div>
        <div
          className="flex justify-between hidden md:flex"
          style={{
            justifyContent: "space-between",
          }}
        >
          <Button
            color="success"
            style={{
              width: "105px",
              height: "80px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/twitter.png"}
              alt="twitter"
              width={56}
              height={56}
            />
          </Button>
          <Button
            color="success"
            style={{
              width: "105px",
              height: "80px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/facebook.png"}
              alt="facebook"
              width={46}
              height={46}
            />
          </Button>
          <Button
            color="success"
            style={{
              width: "105px",
              height: "80px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/google.png"}
              alt="google"
              width={44}
              height={44}
            />
          </Button>
          <Button
            color="success"
            style={{
              width: "105px",
              height: "80px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/apple.png"}
              alt="apple"
              width={38}
              height={51}
            />
          </Button>
        </div>
        <div className="flex justify-between md:hidden">
          <button
            color="success"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              width: "60px",
              height: "50px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/twitter.png"}
              alt="twitter"
              width={20}
              height={20}
            />
          </button>
          <button
            color="success"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              width: "60px",
              height: "50px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/facebook.png"}
              alt="facebook"
              width={20}
              height={20}
            />
          </button>
          <button
            color="success"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              width: "60px",
              height: "50px",
              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/google.png"}
              alt="google"
              width={20}
              height={20}
            />
          </button>
          <button
            color="success"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              width: "60px",
              height: "50px",

              backgroundColor:
                type === containerTypes.login ? "#3C1AB9" : "#165A0F",
            }}
          >
            <Image
              src={"/icons/apple.png"}
              alt="apple"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div className="z-0 md:hidden w-screen h-1/2">
        <Image
          src={imageUrl}
          alt="Logo"
          width={620}
          height={100}
          objectFit="cover"
          className="md:rounded-br-3xl"
          style={{ marginTop: -20, zIndex: -1 }}
        />
      </div>
    </div>
  );
}