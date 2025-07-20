import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-between w-full  min-h-[100dvh]">
      <div className="sticky top-0 flex justify-between items-center w-full bg-black text-white p-4 h-[5rem]">
        <h2 className="text-2xl font-bold">Momentum Drops</h2>
        <Link to="/login">Sign In</Link>
      </div>
      <div className="min-h-[calc(100dvh-8rem)] flex">{children}</div>
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 h-[3rem]">
        Footer
      </div>
    </div>
  )
}

export default Layout
