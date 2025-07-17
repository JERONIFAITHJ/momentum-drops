import { lazy } from 'react'
import RouteWrapper from '../components/RouteWrapper'

const Comp = lazy(() => import('../App'))

const Landing = () => (
  <RouteWrapper>
    <Comp />
  </RouteWrapper>
)

export default Landing
