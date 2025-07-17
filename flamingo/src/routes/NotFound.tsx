import { lazy } from 'react'
import RouteWrapper from '../components/RouteWrapper'

const Comp = lazy(() => import('../components/NotFound'))

const NotFound = () => {
  return (
    <RouteWrapper>
      <Comp />
    </RouteWrapper>
  )
}

export default NotFound
