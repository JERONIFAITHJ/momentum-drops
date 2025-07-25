import express, { Request, Response } from 'express'
const app = express()
const port = 4000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.info(`Phoenix listening on port ${port}`)
})
