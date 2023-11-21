import React from 'react'
import { Image } from 'react-bootstrap'
import HomeIcon from '../component/Home.png'
import Compass from '../component/compass.png'
import Reels from '../component/download.png'
const Footer = () => {
    return (
        <div>
            <Image src={HomeIcon} />
            <Image src={Compass} />
            <Image src={Reels} />
            <Image src={HomeIcon} />

            <Image src={HomeIcon} />

            
        </div>
    )
}

export default Footer
