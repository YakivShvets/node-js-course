import express, { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { createConnection } from 'typeorm'
import { authRouter } from './auth'
import { userRouter } from './user'
import {errorHandler} from './errorHandler'

async function startServer() {
  const app = express()
  app.use(express.json())
  app.use(authRouter)
  app.use('/user', userRouter)
  app.use(errorHandler)
  await createConnection()
  console.log('db connected')
  app.listen(3000, () => {
    console.log('Server started')
  })
}

function logErrors(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack)
  next(err)
}
startServer().catch((e) => {
  console.error(e)
})
