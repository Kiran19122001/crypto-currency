import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {bitData: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    this.setState({
      bitData: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
        name: eachItem.currency_name,
        uroValue: eachItem.euro_value,
        usdValue: eachItem.usd_value,
      })),
      isLoading: false,
    })
  }

  renderCryptoList = () => {
    const {bitData} = this.state
    return <CryptocurrenciesList cryptoDetails={bitData} />
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptoList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
