'use client';

import { Button } from '@material-ui/core'
import React, { useState } from 'react'

const Banner = () => {

    return (
        <div className="banner">
            
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button 
                    variant='outlined'>Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
