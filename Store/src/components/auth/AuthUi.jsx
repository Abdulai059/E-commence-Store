import { useState } from "react";
import LoginHeader from "../../ui/LoginHeader";
import PressmartLogo from "../../ui/Logo";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthUi({ onCloseModal }) {
  const [activeTab, setActiveTab] = useState("login");
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="w-full max-w-full rounded-xl p-5 sm:max-w-md sm:rounded-2xl sm:p-6 md:p-0">
      <div className="mb-5 flex justify-center sm:mb-6">
        <PressmartLogo size="xlarge" variant="red" />
      </div>

      <LoginHeader
        title={activeTab === "login" ? "Log in to your account" : "Create an account"}
        subtitle={
          activeTab === "login"
            ? "Welcome back! Please enter your details."
            : "Get started with your free account today."
        }
      />

      {activeTab === "login" ? (
        <LoginForm
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          onSwitchToSignup={() => setActiveTab("signup")}
          onCloseModal={onCloseModal}
        />
      ) : (
        <SignupForm
          acceptTerms={acceptTerms}
          setAcceptTerms={setAcceptTerms}
          onSwitchToLogin={() => setActiveTab("login")}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
}