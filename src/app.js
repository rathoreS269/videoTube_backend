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


  //routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter) //now router is somewhere else that's why we use "app.use()"
//ex : http://localhost:8000/api/v1/users/register (how routers works)

export {app}