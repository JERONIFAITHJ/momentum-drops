import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-[100dvh]">
      <div className="bg-black text-white p-4">Header</div>
      {children}
      <div className="bg-gray-800 text-white p-4">Footer</div>
    </div>
  )
}

export default Layout
