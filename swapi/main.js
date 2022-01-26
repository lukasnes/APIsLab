let resBtn = document.querySelector(".resBtn")
let body = document.querySelector(".body")

const btnClick = () => {
    axios
        .get('https://swapi.dev/api/planets/?search=Alderaan')
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
            }
        })
}

resBtn.addEventListener('click',btnClick)