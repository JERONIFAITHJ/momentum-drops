import { lazy } from 'react'
import RouteWrapper from '../components/RouteWrapper'

const Comp = lazy(() => import('../components/Login'))

const Login = () => {
  return (
    <RouteWrapper>
      <Comp />
    </RouteWrapper>
  )
}

export default Login
