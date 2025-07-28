import { Router, Request, Response } from 'express'
import { hashPassword, comparePassword } from '../utils'

const router = Router()

type Payload = {
  username?: string
  password?: string
}

router.post('/create-user', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as Payload
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' })
    }
    const user = null
    //   Simulating a user database
    if (user) {
      return res.status(409).json({ error: 'User already exists' })
    }
    await hashPassword(password)
    //   Simulating saving the user
    res.status(201).json({ message: 'User created' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as Payload
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' })
    }
    // Simulating fetching the user password hash
    const hashed = null
    if (!hashed) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    const valid = await comparePassword(password, hashed)
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    res.status(200).json({ message: 'Login successful' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'No route found' })
})

export default router
