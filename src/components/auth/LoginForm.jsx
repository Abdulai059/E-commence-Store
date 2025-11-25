export default function LoginForm({ onSubmit, switchToSignup }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <input name="email" type="email" className="w-full rounded-lg border px-4 py-3" required />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          className="w-full rounded-lg border px-4 py-3"
          required
        />
      </div>

      <button className="w-full rounded-lg bg-purple-600 py-3 text-white">Sign in</button>

      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button onClick={switchToSignup} className="font-medium text-purple-600">
          Sign up
        </button>
      </p>
    </form>
  );
}
