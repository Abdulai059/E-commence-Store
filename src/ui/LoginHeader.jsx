function LoginHeader({ title, subtitle }) {
  return (
    <>
      <h1 className="mb-2 text-center text-xl font-semibold text-gray-900 sm:mb-3 sm:text-3xl">
        {title}
      </h1>

      <p className="mb-6 px-2 text-center text-sm text-gray-500 sm:mb-8 sm:text-base">{subtitle}</p>
    </>
  );
}

export default LoginHeader;
