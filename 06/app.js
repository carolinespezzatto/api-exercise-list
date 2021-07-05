const express = require('express') 
const app = express() 

app.use(express.json())

function calculaMulta(infos) {
    if (infos.car_velocity >= (infos.max_velocity_allowed + ((infos.max_velocity_allowed / 100) * 10))) {
        let total = infos.car_velocity - infos.max_velocity_allowed 
        let percentage_exceeded = ((total * 100) / infos.max_velocity_allowed)
        return {
            "traffic_ticket": true,
            "velocity__exceeded": infos.car_velocity,
            "percentage_exceeded": `${percentage_exceeded}%`
        }
    } else {
            return {
                "traffic_ticket": false,
                "velocity__exceeded": 0,
                "percentage_exceeded": '0%'
            }
    }
}

app.post("/api/v1/multa", function (req, res) {
    
    let result = calculaMulta(req.body)
    res.send(result)
})

app.listen(3000)