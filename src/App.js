import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [countries, setCountries] = useState('');

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  };

  useEffect(hook, []);


  return (
    <div>
      find countries
      <input  />
    </div>
  );
}

export default App;

// write onChange handler to sync user input to state
  // should initially grab information for all countries from endpoint all, then filter to based on user input to determine what to display
  // write onChange handler
  // axios request should be made as part of change handler ...then i don't reallly need search term as a state