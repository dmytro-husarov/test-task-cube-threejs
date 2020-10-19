import React, { useCallback, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import './App.scss'
import Pyramid from './components/three/Pyramid'
import Slider from './components/mui/Slider'

function App() {
    const [boxSize, setBoxSize] = useState(5)
    const [count, setCount] = useState(10)

    const handleBoxSize = useCallback((_event, newValue) => setBoxSize(newValue * 0.1), [setBoxSize])
    const handleCount = useCallback((_event, newValue) => setCount(newValue), [setCount])

    return (
        <>
            <Canvas camera={{position: [0, 75, 380], fov: 45}}>
                <ambientLight />
                <Pyramid boxSize={boxSize} count={count} />
                <gridHelper position={[-(boxSize / 2), -(boxSize / 2), 0]} args={[100, 10]} />
                <OrbitControls />
            </Canvas> 

            <Slider
                handleBoxSize={handleBoxSize}
                handleCount={handleCount}
            />
        </>
    )
}

export default App
