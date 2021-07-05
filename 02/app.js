const express = require('express') 
const axios = require('axios')
const app = express() 

function converterFahrenheit(celsius) {
  return celsius * 1.8 + 32
}

async function dataETemperatura() {
  let dataAtual = new Date()
  let response = await axios.get("https://api.hgbrasil.com/weather?woeid=459547")
  let temperaturaEmCelcius = response.data.results.temp
   
  return {
      dataAtual: `${dataAtual.getDate()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()}, ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`,
      fahrenheint: converterFahrenheit(temperaturaEmCelcius)
  }
}

app.get("/api/v1/dataETemperatura", async function (req, res) {
    res.send(await dataETemperatura())
})

app.listen(3000)