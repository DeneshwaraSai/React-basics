import React from 'react'

function Hero({heroName}) {

    if (heroName === 'Joker')   
        return new Error('He is not a hero.');

  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero;
