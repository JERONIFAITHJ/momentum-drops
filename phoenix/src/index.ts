import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import authRouter from './router/auth'

const app = express()
const port = process.env.PORT || 4000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/health', (_: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/auth', authRouter)

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World!')
})

app.use((_: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' })
})

app.use((err: Error, _: Request, res: Response) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(port, () => {
  console.info(`Phoenix listening on port ${port}`)
})
