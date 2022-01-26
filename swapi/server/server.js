const express = require("express")
const cors = require("cors")
const { default: axios } = require("axios")
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/:planet', async(req, res) => {
    const { planet } = req.params
    let planetInfo;
    await axios
        .get(`https://swapi.dev/api/planets/?search=${planet}`)
        .then(response => {
            planetInfo = response.data
        })
        res.status(200).send(planetInfo)
})


app.listen(4000,console.log("Server running on 4000"))