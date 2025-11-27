import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import GoogleIcon from "../../ui/GoogleIcon";
import InputField from "../../ui/InputField";

function LoginForm({ rememberMe, setRememberMe, onSwitchToSignup }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <InputField label="Email" type="email" placeholder="Enter your email" />

      <InputField label="Password" type="password" placeholder="••••••••" />

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

      <Button size="medium" variation="secondary" icon={<GoogleIcon />} className="w-full">
        Sign in with Google
      </Button>

      <p className="mt-4 text-center text-xs text-gray-600 sm:mt-6 sm:text-sm">
        Don't have an account?{" "}
        <button
          onClick={onSwitchToSignup}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
