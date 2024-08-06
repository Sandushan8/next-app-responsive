import SignUpLoginContainer from "../components/signUpLoginContainer/signUpLoginContainer";
import { containerTypes } from "../components/signUpLoginContainer/signUpLoginContainer.types";

export default function Login() {
  return (
    <main className="w-screen h-screen relative">
      <SignUpLoginContainer
        imageUrl={"/images/login.jpeg"}
        type={containerTypes.login}
      />
    </main>
  );
}
