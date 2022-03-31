import React, { useState, useEffect } from 'react'
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'
import './CurrencyConverter.css'

// URL to get the info of all the convertable currencies available
const url = 'https://blockchain.info/ticker'

const CurrencyConverter = () => {

    const [currency, setCurrency] = useState([{}])
    const [btc, setBtc] = useState()
    const [val, setVal] = useState()
    const [curr, setCurr] = useState()

    //Getting data from the URL 
    async function fetchTours() {
        const data = await fetch(url)
        const jsonData = await data.json()
        setCurrency(jsonData)
    }

    useEffect(() => {
        fetchTours()
    }, [])

    const options = []

    //Calling an API request to get the converted BTC value
    async function handleClick(event){
        const data = await fetch(`https://blockchain.info/tobtc?currency=${curr}&value=${val}`)
        const jsonData = await data.json()
        setBtc(jsonData)
    }
    
    //To prevent the default reloading of page when we submit the form
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //To get the value of inputs
    function handleValue(event){
        const val = event.target.value
        setVal(val)
    }
    function handleCurrency(event){
        const val = event.target.value
        setCurr(val)
    }

    return (
        <div>
            <Nav2 />
            <div className='container curr'>
                <h1>Convert any Value in any Currency to BTC</h1>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <label htmlFor="value">Value</label>
                            <input type="text" className="form-control" id="value" onChange={handleValue} />
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="inputState">Currency</label>
                            <select id="inputState" className="form-control form-select dropdown-toggle" onChange={handleCurrency}>
                                <option selected disabled>Choose . . .</option>
                                {/* Mapping over the fetched data to get all the currencies */}
                                {Object.entries(currency).forEach(item => {
                                    options.push(item)
                                })}
                                {options.map((opt) => {
                                     return <option>{opt[0]}</option>
                                })}
                            </select>

                        </div>
                    </div>

                    <div className="form-row">
                        <button type="submit"  className="btn btn-primary col-md-2" onClick={handleClick}>Convert</button>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label htmlFor="btc">BTC</label>
                            <input type="text" className="form-control" id="btc" value={btc}/>
                        </div>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CurrencyConverter