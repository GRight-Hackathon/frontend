import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Link from "next/link";

import Image from 'next/image';

const url = (name, wrap) => 
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Landing() {
  const parallax = useRef();
  
  return (
    <div style={{ width: '100%', height: '100%', background: '#D5D8DB' }}>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0} speed={0} style={{ backgroundImage: "linear-gradient(black, #D5D8DB)" }} />
        <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#D5D8DB' }} />
        

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.24} speed={0.8} style={{ zIndex: 2}}>
          <div className="flex content-center justify-center pt-12">
            <Link href="/map">
              <button className="w-3/4 h-[100px] bg-blue-400 hover:bg-blue-600 rounded-3xl text-white text-3xl" onClick={() => console.log("Hi")} href="/map">Get Started!</button>
            </Link>
          </div>
          <div className="flex content-center justify-center pt-12">
            <Link href='https://googlemapsplatform.devpost.com/'>
              <p className="text-gray cursor-pointer marker:link link-underline link-underline-black">© GOOGLE MAPS PLATFORM HACKATHON</p>
            </Link>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0.05}
          speed={0.6}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div className="flex flex-col content-center justify-center pt-12 text-center">
            <div className='flex content-center justify-center'>
              <svg width="226" height="277" viewBox="0 0 226 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M134.558 46.5461C155.057 115.156 128.758 118.846 89.8593 79.4797C87.2371 76.8259 82.6772 77.7231 81.4938 81.2612C52.3259 168.47 97.5417 204.307 155.437 116.428C199.956 48.8551 200.343 141.262 143.91 193.32C127.826 208.158 131.954 258.08 117.102 262.517C96.0235 268.815 50.3294 215.437 38.2022 174.849C0.925859 50.0883 113.081 -25.3335 134.558 46.5461Z" fill="#4A80F5"/>
                <path d="M38.2022 174.849C0.925865 50.0884 113.081 -25.3335 134.558 46.5461C155.057 115.156 128.758 118.846 89.8593 79.4797C87.2371 76.8259 82.6772 77.7231 81.4938 81.2612C52.3259 168.47 97.5417 204.307 155.437 116.428C199.956 48.8551 200.343 141.262 143.91 193.32M38.2022 174.849L143.91 193.32M38.2022 174.849C50.3294 215.437 96.0235 268.815 117.102 262.517M38.2022 174.849L117.102 262.517M143.91 193.32C127.826 208.158 131.954 258.08 117.102 262.517M143.91 193.32L110.547 214.379L117.102 262.517" stroke="#4A80F5"/>
                <path d="M107.146 138.266C92.2734 151.041 69.4229 148.831 56.1083 133.329C42.7936 117.828 44.0568 94.9058 58.9297 82.1309C73.8025 69.3561 96.653 71.5663 109.968 87.0676C123.282 102.569 122.019 125.491 107.146 138.266Z" fill="#F18D00"/>
              </svg>
            </div>
              <p className=' font-extrabold text-xl lg:text-8xl text-blue-500 marker: animate-charcter'>
                  Welcome to GRight
              </p>
              <p className=' font-extrabold text-xl lg:text-lg text-white m-5'>
              Saving your fuel by going in the &nbsp; 
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
                <span className="relative text-white">right direction…</span>
              </span>
               <br/> always turning left!
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: `cover`,
          }}>
            <div className="flex flex-col content-center justify-center pt-12">
              <div className="flex content-center justify-center pt-12 w-[100%]">
                <Link href="https://github.com/GRight-Hackathon/frontend">
                  <button className="w-[20vh] lg:w-[40vh] h-[100px] bg-orange-400 hover:bg-orange-600 rounded-3xl text-white text-3xl lg:m-60 m-2">Github</button>
                </Link>
                <Link href="/aboutus">
                  <button className="w-[20vh] lg:w-[40vh] h-[100px] bg-orange-400 hover:bg-orange-600 rounded-3xl text-white text-3xl lg:m-60 m-2" onClick={() => console.log("Thanks for caring about us!")}>About Us</button>
                </Link>
              </div>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            position: 'absolute',
            dispaly: 'flex',
            top: 500,
            left: 25,
            padding: '0px 0px 250px 250px',
          }}>
          <img src={url('earth')} style={{ width: '100%' }} />
        </ParallaxLayer>


      </Parallax>
    </div>
  )
}
