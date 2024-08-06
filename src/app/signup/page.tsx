import SignUpLoginContainer from "../components/signUpLoginContainer/signUpLoginContainer";
import { containerTypes } from "../components/signUpLoginContainer/signUpLoginContainer.types";

export default function SignUp() {
  return (
    <main className="w-full h-screen">
      <SignUpLoginContainer
        imageUrl={"/images/signup.jpeg"}
        type={containerTypes.signup}
      />
    </main>
  );
}
