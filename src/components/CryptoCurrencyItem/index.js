import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoDetails} = props
  const {id, name, currencyLogo, uroValue, usdValue} = cryptoDetails

  return (
    <li className="list-container">
      <div className="logo-name-container">
        <img
          src={currencyLogo}
          alt={name}
          value={currencyLogo}
          className="image"
        />
        <p className="name">{name}</p>
      </div>

      <div className="coin-type-container">
        <p className="name">{usdValue}</p>

        <p className="name">{uroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
