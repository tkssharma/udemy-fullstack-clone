'use client'

import React from 'react'
import Banner from './components/home/Banner'
import NearBy from './components/home/NearBy'
import LiveAnywhere from './components/home/LiveAnywhere'
import DiscoverPlaces from './components/home/DiscoverPlaces'
import HostBanner from './components/home/HostBanner'
import Footer from "./components/home/Footer"

const home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__nearby">
                <h1>Explore Nearby</h1>
                <NearBy />
            </div>

            <div className="home__anywhere">
                <h1>Live Anywhere</h1>
                <LiveAnywhere />
            </div>

            <div className="home__host">
                <HostBanner />
            </div>
            <div className="home__discover">
                <h1>Discover Places </h1>
                <DiscoverPlaces />
            </div>
            <div>
              <Footer />
            </div>
        </div>
    )
}

export default home
