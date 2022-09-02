const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    /* for(const country of countries){
        // console.log(country)
    } */

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country')
        countriesDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>capital: ${country.capital ? country.capital[0] : '404' }</p>
        <button onclick="countriesDetails('${country.cca2 ? country.cca2 : country.cca3}')">details</button>
        `
        countriesContainer.appendChild(countriesDiv)
    });
}

const countriesDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `
    // console.log(url)
    // console.log('country details is', code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}

const displayCountriesDetails = country => {
    const countriesInfo = document.getElementById('countries-details');
    countriesInfo.innerHTML = `
    <h3>Name: ${country.name.common} </h3>
    <img src="${country.flags.png}">
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}/sr.km</p>
    `

}
loadCountries()