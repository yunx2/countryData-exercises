import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  };

  useEffect(hook, []);

  const handleChange = e => {
    const term = e.target.value;
    setSearchTerm(term);
  }


  return (
    <div>
      find countries
      <input onChange={handleChange} />
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