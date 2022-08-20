import 'module-alias/register'
import { config } from 'dotenv'
import app from './config/app'
import env from './config/env'
config()

app.listen(env.PORT, () => console.log(`Start server in: http://localhost:${env.PORT}`))
