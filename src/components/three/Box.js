import React from 'react'

const Box = ({boxSize, position}) => {
    return (
        <mesh scale={[boxSize, boxSize, boxSize]} position={position} >
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <meshStandardMaterial roughness={0.5} attach='material' color={Math.random() * 0xffffff} />
        </mesh>
    )
}

export default Box