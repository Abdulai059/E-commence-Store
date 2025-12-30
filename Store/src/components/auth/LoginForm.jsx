import { useState } from "react";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import GoogleIcon from "../../ui/GoogleIcon";
import InputField from "../../ui/InputField";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


function LoginForm({ rememberMe, setRememberMe, onSwitchToSignup, onCloseModal }) {
  const [email, setEmail] = useState('dakex93598@cucadas.com');
  const [password, setPassword] = useState('808080');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSuccess: () => {
          // Use the prop instead of context
          onCloseModal?.();
          setEmail('');
          setPassword('');
        }
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <InputField
        label="Email"
        type="email"
        id="email"
        value={email}
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        disabled={isLoading}
      />

      <div className="space-y-2 w-full max-w-sm mx-auto">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pr-10 border rounded-lg px-3 py-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
          </button>
        </div>
      </div>



      <div className="xs:flex-row xs:items-center xs:justify-between xs:gap-0 flex flex-col gap-3">
        <Checkbox
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          label="Remember for 30 days"
        />
        <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700 sm:text-sm">
          Forgot password
        </a>
      </div>

      <Button
        size="medium"
        variation="primary"
        className="w-full"
        type="submit"
        disabled={isLoading}
      >
        {!isLoading ? "Login" : <SpinnerMini />}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>

      <Button size="medium" variation="secondary" icon={<GoogleIcon />} className="w-full">
        Sign in with Google
      </Button>

      <p className="mt-4 text-center text-xs text-gray-600 sm:mt-6 sm:text-sm">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          Sign up
        </button>
      </p>
    </form>
  );
}

export default LoginForm;