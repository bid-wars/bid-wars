import React from 'react'
import { Fireworks } from 'fireworks/lib/react'

export default function Boom() {
    let fxProps = {
        count: 4,
        interval: 400,
        colors: ['#3454D1', '#F9F9F9', '#ff4040'],
        calc: (props, i) => ({
          ...props,
          x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 200,
          y: 500 + Math.random() * 200 - 100 + (i === 2 ? -100 : 0)
        })
      }
    return (
        <div>
            <Fireworks {...fxProps} />
        </div>
    )
}
