export default function SignupForm({ onSubmit, switchToLogin }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">

      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          name="name"
          type="text"
          className="w-full px-4 py-3 rounded-lg border"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          className="w-full px-4 py-3 rounded-lg border"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          name="password"
          type="password"
          className="w-full px-4 py-3 rounded-lg border"
          required
        />
      </div>

      <button className="w-full py-3 bg-purple-600 text-white rounded-lg">
        Create Account
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button onClick={switchToLogin} className="text-purple-600 font-medium">
          Log in
        </button>
      </p>
    </form>
  );
}
