require('dotenv').config()
const express = require("express")
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")

//Database configuration
mongoose.connect(process.env.DATABASE_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log("DB connected!")})
.catch(err => { console.log("DB connection failed", err)})

const app = express()

const indexRoute = require("./routes/index")


app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static("public"))
app.set("layout", "layouts/layout")
app.use(expressLayouts)

app.use("/", indexRoute)


app.listen(process.env.PORT || 3000)