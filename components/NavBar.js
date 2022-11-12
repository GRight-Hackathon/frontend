import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo_transparent.png"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
 
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push("/")
      }

    return (
        <nav className={`w-full px-5 bg-transparent bg-opacity-10 backdrop-blur transition-all duration-500 ${
            navbar || isOpen ? "translate-y-0 delay-20" : "-translate-y-40 delay-20"}`}>
            <div className="space-evenly mx-auto lg:max-w-7xl md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-5 md:py-5 md:block">
                        <div className="md:hidden">
                            <button
                                className="text-gray-700 rounded-md outline-none justify-center"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <div className="relative w-2 h-1 transform">
                                    <span
                                        className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                                        navbar ? "rotate-45 delay-200" : "-translate-y-1.5"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
                                        navbar ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                                        navbar ? "-rotate-45 delay-200" : "translate-y-1.5"
                                        }`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center py-5 md:block md:pb-0 md:mt-0 bg-inherit transition-all duration-500 ${
                            navbar ? "block" : "hidden delay-200"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white-600">
                                <Link href="/">
                                    {isMobile ? <></> : <Image src={logo} onClick={e => handleClick(e)} alt="Picture of the author" width={75} height={75} className="invisible md:visible md:hidden cursor-pointer"/>}
                                </Link>
                            </li>
                            <li className="text-white-600 marker:link link-underline link-underline-black">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-white-600 marker:link link-underline link-underline-black">
                                <Link href="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}