import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        // const names = data.map(country => country.name);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">

      <h1>Countries loaded: {countries.length}</h1>
      <Cart cart={cart}></Cart>

      <ul>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }
      </ul>

    </div>
  );
}

export default App;
