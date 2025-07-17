import { createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import NotFound from './NotFound'
import Login from './Login'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default routes
