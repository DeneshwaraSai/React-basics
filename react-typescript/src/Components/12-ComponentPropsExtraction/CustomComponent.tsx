import React from 'react'
import { Greet } from '../01-Props/Greet'

export const CustomComponent = (props: React.ComponentProps< typeof  Greet>) => {
  return (
    <div>
      {props.messageCount}
    </div>
  )
}

