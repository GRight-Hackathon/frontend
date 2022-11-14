import React from 'react'
import Body from '../components/Body';
import NavBar from '../components/NavBar';
import Image from 'next/image'
import jon from '../public/jonathan.jpg'
import jason from '../public/jason.jpg'
import eugene from '../public/eugene.jpg'
import shaune from '../public/shaune.jpg'
import yj from '../public/yuanjing.jpg'
import linkedin from '../public/linkedin.png'
import github from '../public/github.png'
export default function AboutUs() {

    return (
        <>
        <NavBar />
        <Body className="flex flex-col items-center">
            <div class='w-4/5'>
                <div class="grid grid-cols-3 gap-6">
                    <Image src={jon} class="col-span-1 object-contain shadow rounded border-none h-30 w-30" />
                    <Image src={jason} class="col-span-1 object-contain shadow rounded border-none h-30 w-30" />
                    <Image src={eugene} class="col-span-1 object-contain shadow rounded border-none h-30 w-30" />
                </div>
                <div class="grid grid-cols-3 gap-6 justify-items-center">
                <div class="text-xl text-gray-800">Jonathan Yap <a href='https://www.linkedin.com/in/jonjon98/'> <Image height={30} width={30} src={linkedin}/> </a> <a href='https://github.com/jonjon98'> <Image height={30} width={30} src={github} /></a></div>
                <div class="text-xl text-gray-800">Jason Yap <a href='https://www.linkedin.com/in/ja-sony/'> <Image height={30} width={30} src={linkedin}/> </a> <a href='https://github.com/JasonYapzx'> <Image height={30} width={30} src={github} /></a></div>
                <div class="text-xl text-gray-800">Eugene Tay <a href='https://www.linkedin.com/in/eugenetayyj/'> <Image height={30} width={30} src={linkedin}/> </a> <a href='https://github.com/eugenetayyj'> <Image height={30} width={30} src={github} /></a></div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                    <Image src={yj} class="col-span-1 object-contain shadow rounded border-none h-30 w-30" />
                    <Image src={shaune} class="col-span-1 object-contain shadow rounded border-none h-30 w-30" />
                </div>
                <div class="grid grid-cols-2 gap-6 justify-items-center">
                <div class="text-xl text-gray-800">Chow Yuan Jing <a href='https://www.linkedin.com/in/chow-yuan-jing/'> <Image height={30} width={30} src={linkedin}/> </a> <a href='https://github.com/seewhyjay'> <Image height={30} width={30} src={github} /></a></div>
                <div class="text-xl text-gray-800">Shaune Ang <a href='https://www.linkedin.com/in/shauneang/'> <Image height={30} width={30} src={linkedin}/> </a> <a href='https://github.com/shauneang'> <Image height={30} width={30} src={github} /></a></div>
                </div>
            </div>
        </Body>
        </>
    )
}

