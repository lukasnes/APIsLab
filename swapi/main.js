let body = document.querySelector(".body")


const btnClick = (evt) => {
    evt.preventDefault()
    const planet = document.querySelector("#planet").value
    console.log(planet)
    axios
    .get(`http://localhost:4000/api/${planet}`)
    .then(res => {
        console.log(res.data)
        console.log(res.data.results)
        let [ results ] = res.data.results
        let residents = results.residents
        for(i = 0; i < residents.length; i++){
            axios
            .get(`${residents[i]}`)
            .then(res => {
                console.log(res.data)
                const name = document.createElement('h2')
                name.textContent = res.data.name
                body.appendChild(name)
            })
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
}

document.querySelector("form").addEventListener('submit',btnClick)