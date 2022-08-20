import { setupRoutes } from '@/main/config/routes'
import { setupApolloServer } from '@/main/config/apollo-server'
import { config } from 'dotenv'
import cors from 'cors'


import express from 'express'
config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
setupRoutes(app)
setupApolloServer(app)

// start server
export default app