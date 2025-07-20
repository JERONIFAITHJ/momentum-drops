const Login = () => {
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-white m-auto">
      <form className="bg-slate-200/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 px-8 py-10 flex flex-col min-w-[500px]">
        <h2 className="text-gray-800 text-center mb-6 tracking-wide text-2xl font-semibold">
          Login
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="px-3 py-2 rounded-lg mb-4 outline-none text-base bg-white/80 placeholder-gray-500 border border-gray-200 focus:border-indigo-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-2 rounded-lg mb-6 outline-none text-base bg-white/80 placeholder-gray-500 border border-gray-200 focus:border-indigo-400"
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="py-3 rounded-lg bg-black text-white font-semibold text-base hover:bg-gray-800 transition-colors shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
