import React, { useState } from "react";

// Logo Component
const Logo = () => (
  <div className="mb-4 flex justify-center sm:mb-6">
    <div className="flex h-16 w-16 transform items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 shadow-2xl transition-transform hover:scale-105 sm:h-20 sm:w-20 sm:rounded-3xl">
      <div className="h-8 w-8 rounded-full bg-white opacity-95 shadow-inner sm:h-10 sm:w-10"></div>
    </div>
  </div>
);

// Header Component
const Header = ({ title, subtitle }) => (
  <>
    <h1 className="mb-2 text-center text-xl font-semibold text-gray-900 sm:mb-3 sm:text-3xl">
      {title}
    </h1>

    <p className="mb-6 px-2 text-center text-sm text-gray-500 sm:mb-8 sm:text-base">{subtitle}</p>
  </>
);

// Input Field Component
const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div>
    <label className="mb-1.5 block text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:ring-2 focus:ring-red-50 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
    />
  </div>
);

// Checkbox Component
const Checkbox = ({ checked, onChange, label }) => (
  <label className="flex cursor-pointer items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border-gray-100 text-purple-600 focus:ring-purple-500"
    />
    <span className="ml-2 text-xs text-gray-700 sm:text-sm">{label}</span>
  </label>
);

// Button Component
const Button = ({ children, onClick, variant = "primary", type = "button" }) => {
  const baseClasses =
    "w-full py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
      : "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700";

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

// Google Icon Component
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" className="flex-shrink-0">
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
    />
    <path
      fill="#FBBC05"
      d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.335z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
    />
  </svg>
);

// Google Button Component
const GoogleButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:gap-3 sm:py-3 sm:text-base"
  >
    <GoogleIcon />
    <span className="truncate">{children}</span>
  </button>
);

// Login Form Component
const LoginForm = ({ rememberMe, setRememberMe, onSwitchToSignup }) => (
  <div className="space-y-4 sm:space-y-5">
    <InputField label="Email" type="email" placeholder="Enter your email" />

    <InputField label="Password" type="password" placeholder="••••••••" />

    <div className="xs:flex-row xs:items-center xs:justify-between xs:gap-0 flex flex-col gap-3">
      <Checkbox
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        label="Remember for 30 days"
      />
      <a href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700 sm:text-sm">
        Forgot password
      </a>
    </div>

    <Button variant="primary">Sign in</Button>

    <GoogleButton>Sign in with Google</GoogleButton>

    <p className="mt-4 text-center text-xs text-gray-600 sm:mt-6 sm:text-sm">
      Don't have an account?{" "}
      <button
        onClick={onSwitchToSignup}
        className="font-medium text-purple-600 hover:text-purple-700"
      >
        Sign up
      </button>
    </p>
  </div>
);

// Signup Form Component
const SignupForm = ({ onSwitchToLogin }) => (
  <div className="space-y- sm:space-y-5">
    <InputField label="Full Name" type="text" placeholder="Enter your full name" />

    <InputField label="Email" type="email" placeholder="Enter your email" />

    <InputField label="Password" type="password" placeholder="Create a password" />

    <InputField label="Confirm Password" type="password" placeholder="Confirm your password" />

    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
      />
      <span className="text-xs text-gray-700 sm:text-sm">
        I agree to the{" "}
        <a href="#" className="font-medium text-purple-600 hover:text-purple-700">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="font-medium text-purple-600 hover:text-purple-700">
          Privacy Policy
        </a>
      </span>
    </div>

    <Button variant="primary">Create account</Button>

    <GoogleButton>Sign up with Google</GoogleButton>

    <p className="mt-4 text-center text-xs text-gray-600 sm:mt-6 sm:text-sm">
      Already have an account?{" "}
      <button
        onClick={onSwitchToLogin}
        className="font-medium text-purple-600 hover:text-purple-700"
      >
        Log in
      </button>
    </p>
  </div>
);

// Main Auth UI Component
export default function AuthUI() {
  const [activeTab, setActiveTab] = useState("login");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-full rounded-xl p-5 sm:max-w-md sm:rounded-2xl sm:p-6 md:p-0">
      <Logo />

      <Header
        title={activeTab === "login" ? "Log in to your account" : "Create an account"}
        subtitle={
          activeTab === "login"
            ? "Welcome back! Please enter your details."
            : "Get started with your free account today."
        }
      />

      <LoginForm rememberMe={rememberMe} setRememberMe={setRememberMe} />

      {/* {activeTab === "login" ? (
        <LoginForm
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          onSwitchToSignup={() => setActiveTab("signup")}
        />
      ) : (
        <SignupForm onSwitchToLogin={() => setActiveTab("login")} />
      )} */}
    </div>
  );
}
