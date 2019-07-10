import React from 'react'
import { Fireworks } from 'fireworks/lib/react'

export default function Boom() {
    let fxProps = {
        count: 3,
        interval: 1000,
        colors: ['#3454D1', '#F9F9F9', '#ff4040'],
        calc: (props, i) => ({
          ...props,
          x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
          y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
      }
    return (
        <div>
            <Fireworks {...fxProps} />
        </div>
    )
}
