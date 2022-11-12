import { useEffect, useState } from 'react';

import Body from '../components/Body';
import NavBar from '../components/NavBar';


export default function Result() {

    return (
    <>
        <NavBar></NavBar>
        <Body className="flex flex-col items-center">
            <div>
                This is the profile page.
            </div>
        </Body>
    </>
    );
}