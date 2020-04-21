import React, {useState, useEffect} from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

function App() {

  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [weather, setWeather] = useState({});
  const [displayInfo, setDisplayInfo] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  };

  useEffect(hook, []);

  const handleChange = e => {
    const term = e.target.value.toLowerCase();
    // setSearchTerm(term);

    const results = countries.filter(country => {
      const name = country.name.toLowerCase();
      return name.includes(term);
    })
    setSearchResults(results);
  }


  // axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
  // .then(response => {
  //   setWeather(response.data);
  //   console.log(weather);
  // }); 

  let display;

  if (searchResults.length > 10) {
    display = <div>too many matches</div>
  } else if (searchResults.length === 1) { // make weather api call here
    const country = searchResults[0];
    display =  (
      <div key={country.name}>
        <h1>{country.name}</h1>
        <br />
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <br /> 
        <h2>languages</h2>
        <ul>
          {country.languages.map(language => {
            return (
              <li key={language.name}>{language.name}</li>
              )
          })}
        </ul>
        <br />
        <img src={country.flag} />
        <h2>temperature </h2>
      </div>
    );
  } else {
    display = searchResults.map(country => {
      return (<p key={country.name}>{country.name} <input type="button" value="show" /></p>)
    })
  }
 
  return (
    <div>
      find countries
      <input onChange={handleChange} />
      <div>debug: {JSON.stringify(searchResults.map(result => result.name))}</div>
      {display}
    </div>
  );
}

export default App;

// write onChange handler to sync user input to state
  // should initially grab information for all countries from endpoint all, then filter to based on user input to determine what to display
  // write onChange handler
  // axios request should be made as part of change handler ...then i don't reallly need search term as a state
// should display data from request