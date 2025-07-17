import Layout from './Layout'

const Login = () => {
  return (
    <Layout>
      <div>
        <h1>Login</h1>
        <div>
          <label htmlFor="name">Username:</label>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <label htmlFor="name">Password:</label>
          <input type="text" placeholder="name" />
        </div>
      </div>
    </Layout>
  )
}

export default Login
