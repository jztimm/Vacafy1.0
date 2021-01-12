import React, {useState} from 'react'
import '../Styles/Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'

export default function Banner() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button onClick={() => {
          setShowSearch(!showSearch)
        }}
          className="banner_searchButton"
          variant='outlined'>
            {showSearch ? "Hide" :
            "Search Dates"}
        </Button>
      </div>

      <div className="banner_info">
        {/* <h1>Go Beyond</h1> */}
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the gems near you.
        </h5>
        <Button
        variant='outlined'>Explore 
        Nearby</Button>
      </div>
    </div>
  )
}
