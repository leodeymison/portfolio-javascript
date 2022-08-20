import 'module-alias/register'
import { config } from 'dotenv'
import app from '@/main/config/app'
import env from '@/main/config/env'
config()


app.listen(env.PORT, () => console.log(`server started on port http://localhost:${env.PORT}`))