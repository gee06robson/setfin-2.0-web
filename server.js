const express = require('express')
const { resolve } = require('path')

const app = express()


if(process.env.NODE_env==="production") {

  app.use(express.static("dist"))
  app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, './dist', 'index.html'))
  })
  
}

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log("success build")
})