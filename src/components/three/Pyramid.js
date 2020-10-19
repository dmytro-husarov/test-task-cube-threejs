import React from 'react'
import Box from './Box'

const Pyramid = ({boxSize, count}) => {

    const renderBox = (size, number) => {
        const positionX = (s, n, x, y) => {
            const cube = [x, y, 0]
        
            return n === 1 ? [cube] : [...positionX(s, n - 1, x + (s + (s / 2)), y), cube]
        }
        const positionY = (s, n, y = 0) => {
            const x = -((n * s) + ((n - 1) * (s / 2))) / 2
            const cube = positionX(s, n, x, y)

            return n === 1 ? cube : [...positionY(s, n - 1, y + s), ...cube]
        }
        return positionY(size, number)
    }

    return (
        <>
            {
                count && renderBox(boxSize, count).map((position, i) => {
                    return (
                        <Box
                            key={Date.now() + i}
                            position={position}
                            boxSize={boxSize}
                        />
                    )
                })
            } 
        </>
    )
}

export default Pyramid
