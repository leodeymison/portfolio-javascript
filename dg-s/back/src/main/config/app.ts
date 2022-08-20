import Connect from '@/infra/db/config'
import { setupRoutes } from '@/main/config/routes'
import { setupApolloServer } from '@/main/config/apollo-server'

import { config } from 'dotenv'
import cors from 'cors'
import express from 'express'
config()

// eslint-disable-next-line no-void
void Connect.authenticate().catch((err) => {
  console.log(err)
})

const app = express()
setupApolloServer(app)
console.log(setupApolloServer(app))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
setupRoutes(app)

export default app
