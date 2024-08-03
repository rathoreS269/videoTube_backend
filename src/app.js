import express from"express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
  }))
  
  app.use(express.json({limit: "16kb"})) //setting limits for json files
  app.use(express.urlencoded({extended: true, limit : "16kb"})) //for urls
  app.use(express.static("public")) //giving excess to some files publically
  app.use(cookieParser())
export {app}