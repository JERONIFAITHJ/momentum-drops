import { Suspense, type ReactNode } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Layout from './Layout'

interface RouteWrapperProps {
  children: ReactNode
}

const RouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </Layout>
    </ErrorBoundary>
  )
}

export default RouteWrapper
