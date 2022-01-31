import cors from 'cors'
import setupRoutes from './routes'

import express, { Express } from 'express'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  setupRoutes(app)
  return app
}
