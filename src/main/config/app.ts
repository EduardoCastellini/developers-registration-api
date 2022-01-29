import setupRoutes from './routes'

import express, { Express } from 'express'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  app.use(express.json())
  setupRoutes(app)
  return app
}
