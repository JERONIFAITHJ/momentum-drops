import { lazy, Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'

const Comp = lazy(() => import('../App'))

const Landing = () => (
  <ErrorBoundary>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Comp />
    </Suspense>
  </ErrorBoundary>
)

export default Landing
