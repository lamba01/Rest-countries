// Function to fetch country data from the API
function fetchCountryData() {
    const apiUrl = 'https://restcountries.com/v3.1/all';
  
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // Function to display country data on the webpage
  function displayCountryData(countries) {
    const countriesContainer = document.getElementById('countries-container');
  
    countries.forEach(country => {
      const countryCard = document.createElement('div');
      countryCard.classList.add('country-card');

      // const test = `${country.region}`;
      // if(test === 'Europe'){
      //   countryCard.classList.add('none');
      // }

      const countryCardText = document.createElement('div');
      countryCardText.classList.add('country-card-text');
  
      const countryFlag = document.createElement('img');
      countryFlag.classList.add('country-flag');
      countryFlag.src = country.flags.png;
      countryFlag.alt = `${country.name.common} Flag`;

      const continentTitle = document.createElement('p');
      continentTitle.textContent = `Region: ${country.region}`
  
      const countryName = document.createElement('h2');
      countryName.classList.add('country-name');
      countryName.textContent = country.name.common;
  
      const countryCapital = document.createElement('p');
      countryCapital.textContent = `Capital: ${country.capital}`;
  
      const countryPopulation = document.createElement('p');
      countryPopulation.textContent = `Population: ${country.population}`;

      countryCardText.appendChild(countryName);
      countryCardText.appendChild(countryPopulation);
      countryCardText.appendChild(continentTitle);   
      countryCardText.appendChild(countryCapital);
  
      countryCard.appendChild(countryFlag);
      countryCard.appendChild(countryCardText);

      
  
      countriesContainer.appendChild(countryCard);
    });
  }
  
  // Fetch country data and display it on the webpage
  document.addEventListener('DOMContentLoaded', () => {
    fetchCountryData()
      .then(countries => {
        displayCountryData(countries);
      });
  });
  



let filter = document.getElementById('filter');
let region = document.getElementById('region');
filter.onclick = function() {
  region.classList.toggle("display")
}
