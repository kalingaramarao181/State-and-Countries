import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {showCountryName: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    const selectedCountry = event.target.value
    this.setState({showCountryName: selectedCountry})
    console.log(event.target.value)
  }

  filteredCountries = () => {
    const {showCountryName} = this.state
    const filteredCountriesList = countryAndCapitalsList.filter(
      eachItem => showCountryName === eachItem.id,
    )
    return filteredCountriesList
  }

  render() {
    const filteredCountriesList = this.filteredCountries()

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select onChange={this.onChangeCapital} className="selection">
            {countryAndCapitalsList.map(eachItem => (
              <option
                value={eachItem.id}
                className="selection-items"
                key={eachItem.id}
              >
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="selection-description">
            is capital of which country?
          </span>
          <ul className="country-container">
            {filteredCountriesList.map(eachItem => (
              <li className="country" key={eachItem.id}>
                {eachItem.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Capitals
