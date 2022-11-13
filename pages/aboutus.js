import React from 'react'
import Body from '../components/Body';
import NavBar from '../components/NavBar';

export default function AboutUs() {

    return (
        <>
        <NavBar />
        <Body className="flex flex-col items-center">
            <div>
                This is our about us page.
            </div>
        </Body>
        </>
    )
}

