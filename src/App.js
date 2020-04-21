import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [countries, setCountries] = useState([
    
{
  name: "Afghanistan",
  topLevelDomain: [
  ".af"
  ],
  alpha2Code: "AF",
  alpha3Code: "AFG",
  callingCodes: [
  "93"
  ],
  capital: "Kabul",
  altSpellings: [
  "AF",
  "Afġānistān"
  ],
  region: "Asia",
  subregion: "Southern Asia",
  population: 27657145,
  latlng: [
  33,
  65
  ],
  demonym: "Afghan",
  area: 652230,
  gini: 27.8,
  timezones: [
  "UTC+04:30"
  ],
  borders: [
  "IRN",
  "PAK",
  "TKM",
  "UZB",
  "TJK",
  "CHN"
  ],
  nativeName: "افغانستان",
  numericCode: "004",
  currencies: [
  {
  code: "AFN",
  name: "Afghan afghani",
  symbol: "؋"
  }
  ],
  languages: [
  {
  iso639_1: "ps",
  iso639_2: "pus",
  name: "Pashto",
  nativeName: "پښتو"
  },
  {
  iso639_1: "uz",
  iso639_2: "uzb",
  name: "Uzbek",
  nativeName: "Oʻzbek"
  },
  {
  iso639_1: "tk",
  iso639_2: "tuk",
  name: "Turkmen",
  nativeName: "Türkmen"
  }
  ],
  translations: {
  de: "Afghanistan",
  es: "Afganistán",
  fr: "Afghanistan",
  ja: "アフガニスタン",
  it: "Afghanistan",
  br: "Afeganistão",
  pt: "Afeganistão",
  nl: "Afghanistan",
  hr: "Afganistan",
  fa: "افغانستان"
  },
  flag: "https://restcountries.eu/data/afg.svg",
  regionalBlocs: [
  {
  acronym: "SAARC",
  name: "South Asian Association for Regional Cooperation",
  otherAcronyms: [ ],
  otherNames: [ ]
  }
  ],
  cioc: "AFG"
  }
]);

  // const hook = () => {
  //   axios.get('https://restcountries.eu/rest/v2/all')
  //     .then(response => setCountries(response.data));
  // };

  // useEffect(hook, []);


  return (
    <div>
      find countries
      <input  />
      <div>
        {countries.map(country => {
          return (
            <div>
              <h1>{country.name}</h1>
              <br />
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <br /> 
              <h2>languages</h2>
              <ul>
                {country.languages.map(language => <li>l{language.name}</li>)}
              </ul>
              <br />
              <img src={country.flag} />
            </div>
          );
        })} 
      </div>
    </div>
  );
}

export default App;

// write onChange handler to sync user input to state
  // should initially grab information for all countries from endpoint all, then filter to based on user input to determine what to display
  // write onChange handler
  // axios request should be made as part of change handler ...then i don't reallly need search term as a state
// should display data from request