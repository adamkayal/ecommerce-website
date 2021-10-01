import React from 'react'
import Product from '../Product/Product'
import "./Home.css"
import products from "./DummyProducts"

export default function Home() {
    return (
        <div className="home">
            <h1>Home page</h1>
            <img
                className="home__banner"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="prime banner"
            />

            <div className="home__row">
                {(products || []).map((product) => (
                    <Product {...product} />
                ))}
            </div>
        </div>
    )
}
