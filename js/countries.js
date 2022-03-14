const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries)
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML[0])
    const container = document.getElementById('countries')
    container.innerHTML = allCountriesHTML.join(' ')
}

// option 1 (orininal system) ta
// const getCountryHTML = country => {
//     return `
//        <div class="main">
//        <div class="country">
//             <img src="${country.flags.png}">
//             <h2>${country.name.common}</h2>
//        </div>
//        </div>
//     `
// }

// option 2
// const getCountryHTML = country => {
//     const {name, flags } = country
//     return `
//        <div class="main">
//        <div class="country">
//             <img src="${flags.png}">
//             <h2>${name.common}</h2>
//        </div>
//        </div>
//     `
// }

// option 3
const getCountryHTML = ({name, flags, area, region}) => {
    return `
       <div class="main">
       <div class="country">
            <img src="${flags.png}">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continent: ${region}</p>
       </div>
       </div>
    `
}
loadCountries()