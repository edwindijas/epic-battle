import * as StyEle from './styles';
import { FeaturesBackgroundCompPicture } from '../components/Picture/Picture';


import P01_Mist from '../assets/Parallax-Forest/01_Mist.png';
import P02_Bushes from '../assets/Parallax-Forest/02_Bushes.png';
import P03_Particles from '../assets/Parallax-Forest/03_Particles.png';
import P04_Forest from '../assets/Parallax-Forest/04_Forest.png';
import P05_Particles from '../assets/Parallax-Forest/05_Particles.png';
import P06_Forest from '../assets/Parallax-Forest/06_Forest.png';
import P07_Forest from '../assets/Parallax-Forest/07_Forest.png';
import P08_Forest from '../assets/Parallax-Forest/08_Forest.png';
import P09_Forest from '../assets/Parallax-Forest/09_Forest.png'
import P10_Sky from '../assets/Parallax-Forest/10_Sky.png';
import { useEffect, useRef, useState } from 'react';

const TestId = 'feature-background'

const ParallaxBackground = [
    P10_Sky,
    P09_Forest,
    P08_Forest,
    P07_Forest,
    P06_Forest,
    P05_Particles,
    P04_Forest,
    P03_Particles,
    P02_Bushes,
    P01_Mist
]

export const FeatureBackgroundLayout = () => {

    const refWrapper = useRef<HTMLDivElement>(null);

    return <StyEle.Wrapper data-testid={TestId} ref={refWrapper} >
        {
            ParallaxBackground.map((src: string, index: number) => {
                return <FeaturesBackgroundCompPicture src={src} speed={index} key={src} />
            })
        }
        <StyEle.Darken />
    </StyEle.Wrapper>
}