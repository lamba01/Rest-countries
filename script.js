let filter = document.getElementById("filter");
let region = document.getElementById("region");
filter.onclick = function () {
  region.classList.toggle("display");
};
// Function to fetch country data from the API
function fetchCountryData() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Function to display country data on the webpage
function displayCountryData(countries) {
  const countriesContainer = document.getElementById("countries-container");
  const singlecountry = document.getElementById("single-container");
  const continentButtons = document.getElementsByClassName("continent-button");
  const defaultView = [...countries]; // Copy of the original countries array

  // Function to filter countries based on the selected continent
  function filterCountriesByContinent(continent) {
    // Clear the countries container
    countriesContainer.innerHTML = "";

    // Filter countries based on the selected continent
    const filteredCountries = countries.filter(
      (country) => country.region === continent
    );

    // Display the filtered countries
    filteredCountries.forEach((country) => {
      // Create and append country card elements...
      const countryCard = createCountryCard(country);
      countriesContainer.appendChild(countryCard);
    });
  }

  // Function to create a country card element
  function createCountryCard(country) {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    const countryCardText = document.createElement("div");
    countryCardText.classList.add("country-card-text");

    const countryFlag = document.createElement("img");
    countryFlag.classList.add("country-flag");
    countryFlag.src = country.flags.png;
    countryFlag.alt = `${country.name.common} Flag`;

    const countryName = document.createElement("h2");
    countryName.classList.add("country-name");
    countryName.textContent = country.name.common;

    const countryCapital = document.createElement("p");
    countryCapital.textContent = `Capital: ${country.capital}`;

    const countryPopulation = document.createElement("p");
    countryPopulation.textContent = `Population: ${country.population}`;

    const countryregionn = document.createElement("p");
    countryregionn.textContent = `Region: ${country.region}`;

    countryCardText.appendChild(countryName);
    countryCardText.appendChild(countryPopulation);
    countryCardText.appendChild(countryCapital);
    countryCardText.appendChild(countryregionn);

    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryCardText);

    // Add click event listener to the country card
    countryCard.addEventListener("click", () => {
      displaySingleCountry(country);
    });

    return countryCard;
  }
  function getCountryByName(name) {
    return countries.find((country) => country.name.common === name);
  }

  // Function to display a single country
  function displaySingleCountry(selectedcountry) {
    // Clear the countries container
    countriesContainer.innerHTML = "";

    // clear the single countries
    singlecountry.innerHTML = "";

    // remove search field
    let top = document.querySelector(".top");
    top.classList.add("none");

    // Div for contents
    const singleCountryDiv = document.createElement("div");

    // create container for flag
    const countryflagdiv = document.createElement("div");

    // Create and append the selected country card
    const maindiv = document.createElement("div");
    maindiv.classList.add("country-card-text");
    const maintext = document.createElement("div");
    const countryCardText = document.createElement("div");
    const countryinfo = document.createElement("div");

    // single country card data
    const countryFlag = document.createElement("img");
    countryFlag.classList.add("single-countryflag");
    countryFlag.src = selectedcountry.flags.png;
    countryFlag.alt = `${selectedcountry.name.common} Flag`;

    // countryname data
    const countryName = document.createElement("h2");
    countryName.classList.add("single-countryname");
    countryName.textContent = selectedcountry.name.common;

    const nativename = document.createElement("p");
    const nativeNameValue = document.createElement("span");
    nativeNameValue.textContent = selectedcountry.name.official;
    nativeNameValue.classList.add("okay");
    nativename.textContent = `Native Name:`;
    nativename.appendChild(nativeNameValue);

    // country capital data
    const countryCapital = document.createElement("p");
    countryCapital.textContent = `Capital: `;
    const countryCapitalValue = document.createElement("span");
    countryCapitalValue.textContent = selectedcountry.capital;
    countryCapitalValue.classList.add("okay");
    countryCapital.appendChild(countryCapitalValue);

    // country population data
    const countryPopulation = document.createElement("p");
    countryPopulation.textContent = `Population: `;
    const countryPopulationValue = document.createElement("span");
    countryPopulationValue.textContent = selectedcountry.population;
    countryPopulationValue.classList.add("okay");
    countryPopulation.appendChild(countryPopulationValue);

    // country region and sub-region data
    const countrySubregion = document.createElement("p");
    countrySubregion.textContent = `Sub region: `;
    const countrySubregionValue = document.createElement("span");
    countrySubregionValue.textContent = selectedcountry.subregion;
    countrySubregionValue.classList.add("okay");
    countrySubregion.appendChild(countrySubregionValue);

    const countryregion = document.createElement("p");
    countryregion.textContent = `Region: `;
    const countryregionValue = document.createElement("span");
    countryregionValue.textContent = selectedcountry.region;
    countryregionValue.classList.add("okay");
    countryregion.appendChild(countryregionValue);

    // country currency data
    const currencyData = selectedcountry.currencies;
    const currencyCode = Object.keys(currencyData)[0]; // Get the first (and likely only) currency code

    // Create an element to display the currency name
    const currencyNameElement = document.createElement("p");
    currencyNameElement.textContent = `Currency: `;
    const countrycurrencyValue = document.createElement("span");
    countrycurrencyValue.textContent = currencyData[currencyCode].name;
    countrycurrencyValue.classList.add("okay");
    currencyNameElement.appendChild(countrycurrencyValue);

    const tldData = selectedcountry.tld;
    const tld = tldData[0]; // Get the first TLD in the array

    // Create an element to display the TLD
    const tldElement = document.createElement("p");
    tldElement.textContent = `Top-Level Domain: `;
    const countrytldValue = document.createElement("span");
    countrytldValue.textContent = tld;
    countrytldValue.classList.add("okay");
    tldElement.appendChild(countrytldValue);

    // Accessing the languages
    const languagesData = selectedcountry.languages;
    const languageCodes = Object.keys(languagesData);

    // Create an element to display the languages
    const languagesElement = document.createElement("p");
    languagesElement.textContent = `Languages: `;
    const countrylanguageValue = document.createElement("span");
    countrylanguageValue.textContent = languageCodes
      .map((code) => languagesData[code])
      .join(", ");
    countrylanguageValue.classList.add("okay");
    languagesElement.appendChild(countrylanguageValue);

    // Accessing the border countries (if available)
    const borderCountries = selectedcountry.borders || []; // Use an empty array if borders is missing

    // Fetch the full names of the bordering countries
    const borderCountryNames = borderCountries.map((code) => {
      const borderCountry = countries.find((c) => c.cca3 === code);
      return borderCountry ? borderCountry.name.common : "Unknown Country";
    });

    const borderCountriesElement = document.createElement("p");

    if (borderCountryNames.length > 0) {
      borderCountriesElement.textContent = "Border Countries:";
    } else {
      borderCountriesElement.textContent = "No bordering countries.";
    }

    // Assuming you have already calculated the 'borderCountryNames' array

    borderCountryNames.forEach((borderCountryName) => {
      const borderCountryElement = document.createElement("span");
      borderCountryElement.textContent = borderCountryName;
      borderCountryElement.classList.add("bordercountries");
      borderCountryElement.onclick = () => {
        const borderCountryData = getCountryByName(borderCountryName);
        displaySingleCountry(borderCountryData);
      };
      borderCountriesElement.appendChild(borderCountryElement);
      borderCountriesElement.classList.add("border");
    });

    // Create and append the back button
    const backBtn = document.createElement("button");
    backBtn.classList.add("backbtn");
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", () => {
      // Clear the countries container
      countriesContainer.innerHTML = "";

      // clear the single country
      singlecountry.innerHTML = "";

      // add search field
      let top = document.querySelector(".top");
      top.classList.remove("none");

      // Display the default view with all countries
      defaultView.forEach((country) => {
        const countryCard = createCountryCard(country);
        countriesContainer.appendChild(countryCard);
      });
    });

    countryCardText.appendChild(nativename);
    countryCardText.appendChild(countryPopulation);
    countryCardText.appendChild(countryregion);
    countryCardText.appendChild(countryCapital);
    countryCardText.appendChild(countrySubregion);

    countryinfo.appendChild(tldElement);
    countryinfo.appendChild(currencyNameElement);
    countryinfo.appendChild(languagesElement);

    maintext.appendChild(countryCardText);
    maintext.appendChild(countryinfo);
    maintext.classList.add("main-text");

    maindiv.appendChild(countryName);
    maindiv.appendChild(maintext);
    maindiv.appendChild(borderCountriesElement);

    countryflagdiv.appendChild(countryFlag);

    singleCountryDiv.appendChild(countryflagdiv);
    singleCountryDiv.appendChild(maindiv);
    singleCountryDiv.classList.add("single-countrycard");

    singlecountry.appendChild(backBtn);
    singlecountry.appendChild(singleCountryDiv);
  }

  // Add click event listeners to the continent buttons
  Array.from(continentButtons).forEach((button) => {
    button.addEventListener("click", (event) => {
      const selectedContinent = event.target.dataset.continent;
      filterCountriesByContinent(selectedContinent);
    });
  });

  // Display all countries by default
  defaultView.forEach((country) => {
    const countryCard = createCountryCard(country);
    countriesContainer.appendChild(countryCard);
    console.log(country);
  });
}

// Fetch country data and display it on the webpage
document.addEventListener("DOMContentLoaded", () => {
  fetchCountryData().then((countries) => {
    displayCountryData(countries);
  });
});
