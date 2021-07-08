//create arrow function by snippet: rface
import React from 'react'
//import css file....
import './Style1.css'

const Coin = ({name,image,symbol,price,volume,priceChange,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt={crypto}/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>

                <div className="coin-data">
                <p className="coin-price">{price}/-</p>
                <p className="coin-volume">4{volume.toLocaleString()}</p>


                {priceChange < 0 ? (
                    <p className="coin-persent red">{priceChange.toFixed(2)}%</p>
                ):(<p className="coin-persent green">{priceChange.toFixed(2)}%</p>)
                }


                <p className="coin-marketcap">
                    Market Cap:  {marketcap.toLocaleString()}/-
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default Coin
