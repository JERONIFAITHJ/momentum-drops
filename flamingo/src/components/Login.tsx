import React, { useState } from 'react'
import { login, signUp } from '../api'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)
    try {
      if (isLogin) {
        await login(form)
        setSuccess('Login successful')
      } else {
        await signUp(form)
        setSuccess('Sign up successful')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-white m-auto">
      <form className="bg-slate-200/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 px-8 py-10 flex flex-col min-w-[500px]">
        <h2 className="text-gray-800 text-center mb-6 tracking-wide text-2xl font-semibold">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <input
          type="text"
          id="username"
          placeholder="Name"
          value={form.username}
          onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
          className="px-3 py-2 rounded-lg mb-4 outline-none text-base bg-white/80 placeholder-gray-500 border border-gray-200 focus:border-indigo-400"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          className="px-3 py-2 rounded-lg mb-6 outline-none text-base bg-white/80 placeholder-gray-500 border border-gray-200 focus:border-indigo-400"
        />
        {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
        {success && <div className="text-green-600 mb-4 text-center">{success}</div>}
        <button
          type="submit"
          onClick={(e) => {
            void submitHandler(e)
          }}
          disabled={loading}
          className="py-3 rounded-lg bg-gray-800 text-white font-semibold text-base hover:bg-gray-800 transition-colors shadow-md mb-2"
        >
          {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : isLogin ? 'Login' : 'Sign Up'}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin)
            setError(null)
            setSuccess(null)
          }}
          className="text-indigo-600 hover:underline text-sm mt-2 border-none bg-transparent"
        >
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </form>
    </div>
  )
}

export default Login
