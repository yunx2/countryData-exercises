import React, {useState} from 'react';


function App() {

  const [search, setSearch] = useState('');

  const handleChange = e => {
    const val = e.target.value;
    setSearch(val);
  }

  return (
    <div>
      find countries
      <input onChange={handleChange} />
    </div>
  );
}

export default App;

// write onChange handler to sync user input to state
  // create state
  // write onChange handler 