import { Suspense, type ReactNode } from 'react'
import ErrorBoundary from './ErrorBoundary'

interface RouteWrapperProps {
  children: ReactNode
}

const RouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default RouteWrapper
